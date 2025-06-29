import React from "react"
import { createRoot } from "react-dom/client"
import { getGraphicsForBpcGraph } from "bpc-graph"
import { getSvgFromGraphicsObject } from "graphics-debug"
import bundledBpcGraphs from "../dist/bundled-bpc-graphs.json"
// @ts-ignore – generated at build time
import circuitSvgs from "../dist/svg-vfs.js" // Record<designName, raw <svg…> string>

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

function Gallery() {
  const graphs = bundledBpcGraphs as Record<string, any>
  const designNames = Object.keys(graphs).sort()

  const [viewMode, setViewMode] = React.useState<"bpc" | "svg">("svg")

  const [preview, setPreview] = React.useState<{
    src: string
    x: number
    y: number
  } | null>(null)

  const showPreview = (src: string, e: React.MouseEvent<HTMLImageElement>) =>
    setPreview({ src, x: e.clientX, y: e.clientY })

  const hidePreview = () => setPreview(null)

  const movePreview = (e: React.MouseEvent<HTMLImageElement>) =>
    setPreview((p) => (p ? { ...p, x: e.clientX, y: e.clientY } : p))

  /* --- constants & helpers for preview positioning --- */
  const PREVIEW_W = 800
  const PREVIEW_H = 800
  const OFFSET = 20

  const computePos = (coord: number, size: number, viewport: number) => {
    // place on the side that keeps the image fully visible.
    if (coord + OFFSET + size <= viewport) return coord + OFFSET // fits after cursor
    if (coord - OFFSET - size >= 0) return coord - OFFSET - size // fits before cursor
    // otherwise clamp to viewport
    return Math.max(Math.min(coord, viewport - size), 0)
  }

  /* calculate preview placement each render */
  const previewLeft = preview
    ? computePos(preview.x, PREVIEW_W, window.innerWidth)
    : 0
  const previewTop = preview
    ? computePos(preview.y, PREVIEW_H, window.innerHeight)
    : 0

  return (
    <>
      <div className="header">
        <h1>Schematic Corpus</h1>
        <button
          className="toggle-btn"
          onClick={() => setViewMode((v) => (v === "bpc" ? "svg" : "bpc"))}
        >
          {viewMode === "bpc" ? "Show Circuit SVGs" : "Show BPC Graphs"}
        </button>
      </div>
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
