import { promises as fs } from "node:fs"
import { join, dirname } from "node:path"
import {
  makeCircuit,
  u1Chip,
  resistor,
  capacitor,
  trace,
} from "lib/codegen/codegen-primitives"
import { pack } from "calculate-packing"

async function main() {
  const scriptDir = dirname(new URL(import.meta.url).pathname)
  const outDir = join(scriptDir, "..", "designs", "pin3set")
  await fs.mkdir(outDir, { recursive: true })

  const pins = [1, 2, 3]
  let idx = 1

  for (const rPin of pins) {
    for (const cPin of pins) {
      if (cPin === rPin) continue // R1 & C1 can’t share the same pin

      pack({
        components: [
          {
            componentId: "U1",
            pads: pins.map((p) => ({
              networkId: `net_U1.pin${p}`,
              offset: { x: 0, y: 0.2 * p },
              padId: `pad_U1.pin${p}`,
              size: {
                x: 0.15,
                y: 0.15,
              },
              type: "rect",
            })),
          },
          {
            componentId: "R1",
            pads: [
              {
                networkId: "net_R1.pin1",
                offset: { x: -0.5, y: 0 },
                padId: "pad_R1.pin1",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
              {
                networkId: "net_R1.pin2",
                offset: { x: 0.5, y: 0 },
                padId: "pad_R1.pin2",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
            ],
          },
          {
            componentId: "C1",
            pads: [
              {
                networkId: "net_C1.pin1",
                offset: { x: -0.5, y: 0.2 },
                padId: "pad_C1.pin1",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
              {
                networkId: "net_C1.pin2",
                offset: { x: 0.5, y: 0.2 },
                padId: "pad_C1.pin2",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
            ],
          },
        ],
        minGap: 0.1,
        packOrderStrategy: "largest_to_smallest",
        packPlacementStrategy: "shortest_connection_along_outline",
      })

      const circuit = makeCircuit([
        u1Chip({ pinCount: 3, connections: {} }),
        resistor({ name: "R1" }),
        capacitor({ name: "C1" }),
        trace({ from: "R1.pin1", to: `U1.pin${rPin}` }),
        trace({ from: "R1.pin2", to: "net.VCC" }),
        trace({ from: "C1.pin1", to: `U1.pin${cPin}` }),
        trace({ from: "C1.pin2", to: "net.GND" }),
      ])

      const fileContents = `export default () => (\n${circuit}\n)\n`
      const fileName = `pin3set${String(idx).padStart(3, "0")}.circuit.tsx`
      await fs.writeFile(join(outDir, fileName), fileContents)
      idx++
    }
  }
  console.log(`Generated ${idx} designs into ${outDir}`)
}

await main().catch(console.error)
