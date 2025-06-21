#!/usr/bin/env bun
import { convertCircuitJsonToBpc } from "circuit-json-to-bpc"
import { promises as fs } from "fs"
import { join, dirname, basename } from "path"

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

  const bundled: Record<string, unknown> = {}

  for (const file of circuitFiles) {
    const circuitJson = JSON.parse(await fs.readFile(file, "utf8"))
    const bpc = convertCircuitJsonToBpc(circuitJson)
    const dir = dirname(file)
    const outPath = join(dir, "bpc.json")
    await fs.writeFile(outPath, JSON.stringify(bpc, null, 2))
    const designName = basename(dir)
    bundled[designName] = bpc
  }

  const bundledPath = join(distDir, "bundled-bpc-graphs.json")
  await fs.writeFile(bundledPath, JSON.stringify(bundled, null, 2))
  console.log(`Wrote ${circuitFiles.length} BPC graphs to ${bundledPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
