import React from "react"
import { createRoot } from "react-dom/client"
import { getGraphicsForBpcGraph } from "bpc-graph"
import { getSvgFromGraphicsObject } from "graphics-debug"
import bundledBpcGraphs from "../dist/bundled-bpc-graphs.json"

function createSvgFromBpc(bpc: any): string {
  const graphics = getGraphicsForBpcGraph(bpc)
  let svgString = getSvgFromGraphicsObject(graphics, {
    backgroundColor: "white",
  })

  return `data:image/svg+xml;base64,${btoa(svgString)}`
}

interface GraphCardProps {
  designName: string
  bpc: any
}

function GraphCard({ designName, bpc }: GraphCardProps) {
  const svgDataUri = createSvgFromBpc(bpc)

  return (
    <div className="graph-card">
      <div className="graph-title">{designName}</div>
      <img
        src={svgDataUri}
        alt={`BPC Graph for ${designName}`}
        className="graph-svg"
      />
    </div>
  )
}

function Gallery() {
  const graphs = bundledBpcGraphs as Record<string, any>
  const designNames = Object.keys(graphs).sort()

  return (
    <div id="gallery" className="gallery">
      {designNames.map((designName) => (
        <GraphCard
          key={designName}
          designName={designName}
          bpc={graphs[designName]}
        />
      ))}
    </div>
  )
}

const container = document.getElementById("gallery")
if (container) {
  const root = createRoot(container)
  root.render(<Gallery />)
}
