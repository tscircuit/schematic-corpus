#!/usr/bin/env bun
import { convertCircuitJsonToBpc } from "circuit-json-to-bpc"
import { promises as fs } from "fs"
import { join, dirname, basename } from "path"
import { getGraphicsForBpcGraph, type FixedBpcGraph } from "bpc-graph"
import { getSvgFromGraphicsObject } from "graphics-debug"

async function getCircuitFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const res = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await getCircuitFiles(res)))
    } else if (entry.isFile() && entry.name === "circuit.json") {
      files.push(res)
    }
  }
  return files
}

async function main() {
  const distDir = join(dirname(new URL(import.meta.url).pathname), "..", "dist")
  let circuitFiles: string[] = []
  try {
    circuitFiles = await getCircuitFiles(distDir)
  } catch {
    console.error(`dist directory not found at ${distDir}`)
    return
  }

  const bundledCorpus: Record<string, unknown> = {}
  const bundledCorpusNoNetLabel: Record<string, unknown> = {}

  for (const file of circuitFiles) {
    const circuitJson = JSON.parse(await fs.readFile(file, "utf8"))
    const bpc = convertCircuitJsonToBpc(circuitJson)
    const dir = dirname(file)
    const outPath = join(dir, "bpc.json")
    await fs.writeFile(outPath, JSON.stringify(bpc, null, 2))

    const bpcNoNetLabel: FixedBpcGraph = structuredClone(bpc) as any
    const netLabelBoxIds = bpcNoNetLabel.boxes
      .filter((box) => {
        const boxPins = bpcNoNetLabel.pins.filter((p) => p.boxId === box.boxId)
        return !boxPins.some((p) => p.color === "netlabel_center")
      })
      .map((b) => b.boxId)
    bpcNoNetLabel.boxes = bpcNoNetLabel.boxes.filter(
      (b) => !netLabelBoxIds.includes(b.boxId),
    )

    bpcNoNetLabel.pins = bpcNoNetLabel.pins.filter(
      (p) => !netLabelBoxIds.includes(p.boxId),
    )

    const outPathNoNetLabel = join(dir, "bpc-no-net-label.json")
    await fs.writeFile(outPath, JSON.stringify(bpc, null, 2))

    const graphics = getGraphicsForBpcGraph(bpc)
    const svg = getSvgFromGraphicsObject(graphics, { backgroundColor: "white" })
    const svgPath = join(dir, "bpc.svg")
    await fs.writeFile(svgPath, svg)

    const graphicsNoNetLabel = getGraphicsForBpcGraph(bpcNoNetLabel)
    const svgNoNetLabel = getSvgFromGraphicsObject(graphicsNoNetLabel, {
      backgroundColor: "white",
    })
    const svgPathNoNetLabel = join(dir, "bpc-no-net-label.svg")
    await fs.writeFile(svgPathNoNetLabel, svgNoNetLabel)

    const designName = basename(dir)

    bundledCorpus[designName] = bpc
    bundledCorpusNoNetLabel[designName] = bpcNoNetLabel
  }

  const bundledPath = join(distDir, "bundled-bpc-graphs.json")
  await fs.writeFile(bundledPath, JSON.stringify(bundledCorpus, null, 2))
  console.log(`Wrote ${circuitFiles.length} BPC graphs to ${bundledPath}`)

  const bundledPathNoNetLabel = join(
    distDir,
    "bundled-bpc-graphs-no-net-label.json",
  )
  await fs.writeFile(
    bundledPathNoNetLabel,
    JSON.stringify(bundledCorpusNoNetLabel, null, 2),
  )
  console.log(
    `Wrote ${circuitFiles.length} BPC graphs to ${bundledPathNoNetLabel}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
