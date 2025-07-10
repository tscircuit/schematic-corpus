#!/usr/bin/env bun
import { promises as fs } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

async function main() {
  const scriptDir = dirname(fileURLToPath(import.meta.url))
  const snapshotsDir = join(scriptDir, "..", "designs", "__snapshots__")
  const outDir = join(scriptDir, "..", "dist-site")
  await fs.mkdir(outDir, { recursive: true })
  const files = await fs.readdir(snapshotsDir)
  for (const file of files) {
    if (!file.endsWith(".svg")) continue
    const m = file.match(/^(design\d+)\.circuit-schematic\.snap\.svg$/)
    if (!m) continue
    const destName = `${m[1]}.svg`
    await fs.copyFile(join(snapshotsDir, file), join(outDir, destName))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
