import React, { use, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { getGraphicsForBpcGraph } from "bpc-graph"
import { getSvgFromGraphicsObject } from "graphics-debug"
import bundledBpcGraphs from "dist/bundled-bpc-graphs.json"
// @ts-ignore – generated at build time
import circuitSvgs from "dist/svg-vfs.js" // Record<designName, raw <svg…> string>

// ↓ add right after the import lines
const svgMap: Record<string, string> = {}
for (const [k, v] of Object.entries(circuitSvgs as Record<string, string>)) {
  const base = k?.split(".")[0] // "design001.circuit-schematic.snap.svg" → "design001"
  if (typeof base === "string" && !(base in svgMap)) svgMap[base] = v
}

// UTF-8 -> base64 helper (avoids “characters outside Latin1 range” errors)
function toBase64(str: string): string {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p) =>
      String.fromCharCode(parseInt(p, 16)),
    ),
  )
}

// memoize SVG data URIs so we never regenerate the same graphic
const svgCache = new WeakMap<object, string>()

function createSvgFromBpc(bpc: any): string {
  // ➊ return cached version if we already made one
  const cached = svgCache.get(bpc)
  if (cached) return cached

  // ➋ otherwise build and cache it
  const graphics = getGraphicsForBpcGraph(bpc)
  const svgString = getSvgFromGraphicsObject(graphics, {
    backgroundColor: "white",
  })
  const dataUri = `data:image/svg+xml;base64,${toBase64(svgString)}`
  svgCache.set(bpc, dataUri)
  return dataUri
}

const svgTextCache = new Map<string, string>()

function createDataUriFromSvg(svg: string): string {
  const cached = svgTextCache.get(svg)
  if (cached) return cached
  const dataUri = `data:image/svg+xml;base64,${toBase64(svg)}`
  svgTextCache.set(svg, dataUri)
  return dataUri
}

interface GraphCardProps {
  designName: string
  src: string
  onPreviewEnter: (src: string, e: React.MouseEvent<HTMLImageElement>) => void
  onPreviewLeave: () => void
  onPreviewMove: (e: React.MouseEvent<HTMLImageElement>) => void
}

function GraphCard({
  designName,
  src,
  onPreviewEnter,
  onPreviewLeave,
  onPreviewMove,
}: GraphCardProps) {
  return (
    <div className="graph-card">
      <div className="graph-title">{designName}</div>
      <img
        src={src}
        alt={designName}
        className="graph-svg"
        onMouseEnter={(e) => onPreviewEnter(src, e)}
        onMouseLeave={onPreviewLeave}
        onMouseMove={onPreviewMove}
      />
    </div>
  )
}
function GitHubStarButton({
  repo = "tscircuit/schematic-corpus",
  onClick,
}: {
  repo?: string
  onClick?: () => void
}) {
  const [stars, setStars] = useState<number | null>(null)
  const [logoUrl, setLogoUrl] = useState<string | null>(null)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => setStars(null))

    setLogoUrl(
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    )
  }, [repo])

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "8px 12px",
        width: isMobile ? "100%" : "auto", // full width on mobile if desired
        textAlign: "center",
      }}
      aria-label={`Star ${repo} on GitHub`}
    >
      {logoUrl ? (
        <img src={logoUrl} alt="GitHub logo" width={20} height={20} />
      ) : (
        <span>🐙</span>
      )}
      <span style={{ fontWeight: 500 }}>
        Stars {stars !== null ? stars.toLocaleString() : "…"}
      </span>
    </button>
  )
}

function Gallery() {
  const graphs = bundledBpcGraphs as Record<string, any>
  const designNames = Object.keys(graphs).sort()

  const [viewMode, setViewMode] = React.useState<"bpc" | "svg">("svg")
  const [preview, setPreview] = React.useState<{
    src: string
    x: number
    y: number
  } | null>(null)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const showPreview = (src: string, e: React.MouseEvent<HTMLImageElement>) =>
    setPreview({ src, x: e.clientX, y: e.clientY })
  const hidePreview = () => setPreview(null)
  const movePreview = (e: React.MouseEvent<HTMLImageElement>) =>
    setPreview((p) => (p ? { ...p, x: e.clientX, y: e.clientY } : p))

  // Close menu automatically if window resizes above mobile breakpoint
  React.useEffect(() => {
    function onResize() {
      if (window.innerWidth > 640) setMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const toggleMenu = () => setMenuOpen((open) => !open)

  /* --- constants & helpers for preview positioning --- */
  const PREVIEW_W = 800
  const PREVIEW_H = 800
  const OFFSET = 20
  const computePos = (coord: number, size: number, viewport: number) => {
    if (coord + OFFSET + size <= viewport) return coord + OFFSET
    if (coord - OFFSET - size >= 0) return coord - OFFSET - size
    return Math.max(Math.min(coord, viewport - size), 0)
  }
  const previewLeft = preview
    ? computePos(preview.x, PREVIEW_W, window.innerWidth)
    : 0
  const previewTop = preview
    ? computePos(preview.y, PREVIEW_H, window.innerHeight)
    : 0

  // Detect mobile based on window width (simple approach)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const isMobile = windowWidth <= 640

  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://buttons.github.io/buttons.js"
    script.async = true
    document.body.appendChild(script)
  }, [menuOpen, isMobile])

  return (
    <>
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "space-between" : "center",
          gap: isMobile ? undefined : "12.6vw",
          padding: "0 20px",
          position: "relative",
          flexWrap: "nowrap",
        }}
      >
        {/* Burger menu button only visible on mobile */}
        {isMobile && (
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            style={{
              fontSize: 28,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              userSelect: "none",
              flex: "0 0 auto",
            }}
          >
            ☰
          </button>
        )}

        {/* Left & right buttons container */}
        {!isMobile && (
          <>
            <div style={{ flex: "0 0 auto", marginRight: "-20px" }}>
              <button
                className="toggle-btn"
                onClick={() =>
                  window.open(
                    "https://bpc-graph.vercel.app/?fixture=%7B%22path%22%3A%22pages%2Fschematic-layout%2Finteractive-schematic-layout.page.tsx%22%7D",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Schematic Debugger
              </button>
            </div>
          </>
        )}

        {/* Center block (title + toggle button) */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            flex: "0 0 auto",
          }}
        >
          <h1 style={{ margin: 0 }}>Schematic Corpus</h1>

          {/* Only show this toggle button if NOT mobile */}
          {!isMobile && (
            <button
              className="toggle-btn"
              onClick={() => setViewMode((v) => (v === "bpc" ? "svg" : "bpc"))}
            >
              {viewMode === "bpc" ? "Show Circuit SVGs" : "Show BPC Graphs"}
            </button>
          )}
        </div>

        {!isMobile && (
          <div style={{ flex: "0 0 auto", marginLeft: "-20px" }}>
            <div className="github-button-container">
              <GitHubStarButton
                repo="tscircuit/schematic-corpus"
                onClick={() =>
                  window.open(
                    "https://github.com/tscircuit/schematic-corpus",
                    "_blank",
                  )
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile burger menu overlay */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "56px", // below header
            left: 0,
            right: 0,
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: 6,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 1000,
          }}
        >
          <button
            className="toggle-btn"
            onClick={() => {
              window.open(
                "https://bpc-graph.vercel.app/?fixture=%7B%22path%22%3A%22pages%2Fschematic-layout%2Finteractive-schematic-layout.page.tsx%22%7D",
                "_blank",
                "noopener,noreferrer",
              )
              setMenuOpen(false)
            }}
          >
            Schematic Debugger
          </button>

          <button
            className="toggle-btn"
            onClick={() => {
              setViewMode((v) => (v === "bpc" ? "svg" : "bpc"))
              setMenuOpen(false)
            }}
          >
            {viewMode === "bpc" ? "Show Circuit SVGs" : "Show BPC Graphs"}
          </button>

          {/* Replace the <a> with GitHubStarButton */}
          <GitHubStarButton
            repo="tscircuit/schematic-corpus"
            onClick={() => {
              window.open(
                "https://github.com/tscircuit/schematic-corpus",
                "_blank",
              )
              setMenuOpen(false)
            }}
          />
        </div>
      )}

      <div id="gallery" className="gallery">
        {designNames.map((designName) => {
          const src =
            viewMode === "bpc"
              ? createSvgFromBpc(graphs[designName]!)
              : createDataUriFromSvg(svgMap[designName]!)

          return (
            <GraphCard
              key={designName}
              designName={designName}
              src={src}
              onPreviewEnter={showPreview}
              onPreviewLeave={hidePreview}
              onPreviewMove={movePreview}
            />
          )
        })}
      </div>

      {preview && (
        <img
          src={preview.src}
          alt="preview"
          style={{
            position: "fixed",
            top: previewTop,
            left: previewLeft,
            width: PREVIEW_W,
            height: PREVIEW_H,
            objectFit: "contain",
            pointerEvents: "none",
            zIndex: 1000,
            border: "1px solid #ccc",
            borderRadius: 4,
            background: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      )}
    </>
  )
}

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(<Gallery />)
}
