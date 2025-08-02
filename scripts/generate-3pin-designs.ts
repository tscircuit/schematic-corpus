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

      const packOutput = pack({
        components: [
          {
            componentId: "U1",
            pads: pins
              .map((p) => ({
                networkId: `net_U1.pin${p}`,
                offset: { x: 0.5, y: 0.2 * p - 0.2 },
                padId: `pad_U1.pin${p}`,
                size: {
                  x: 0.15,
                  y: 0.15,
                },
                type: "rect",
              }))
              .concat([
                {
                  networkId: "net_U1.KEEPOUT",
                  offset: { x: 0, y: 0 },
                  padId: "pad_U1.KEEPOUT",
                  size: { x: 0.3, y: 2 },
                  type: "rect",
                },
              ]),
          },
          {
            componentId: "R1",
            pads: [
              {
                networkId: `net_U1.pin${rPin}`,
                offset: { x: -0.3, y: 0 },
                padId: "pad_R1.pin1",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
              {
                networkId: "net_R1.pin2",
                offset: { x: 0.3, y: 0 },
                padId: "pad_R1.pin2",
                size: { x: 0.15, y: 0.15 },
                type: "rect",
              },
              {
                networkId: "net_R1.KEEPOUT",
                offset: { x: 0, y: 0 },
                padId: "pad_R1.KEEPOUT",
                size: { x: 1, y: 0.5 },
                type: "rect",
              },
            ],
          },
          {
            componentId: "C1",
            pads: [
              {
                networkId: `net_U1.pin${cPin}`,
                offset: { x: -0.3, y: 0 },
                padId: "pad_C1.pin1",
                size: { x: 0.25, y: 0.25 },
                type: "rect",
              },
              {
                networkId: "net_C1.pin2",
                offset: { x: 0.3, y: 0 },
                padId: "pad_C1.pin2",
                size: { x: 0.25, y: 0.25 },
                type: "rect",
              },
              {
                networkId: "net_C1.KEEPOUT",
                offset: { x: 0, y: 0 },
                padId: "pad_C1.KEEPOUT",
                size: { x: 1, y: 0.5 },
                type: "rect",
              },
            ],
          },
        ],
        minGap: 0.1,
        packOrderStrategy: "largest_to_smallest",
        packPlacementStrategy: "shortest_connection_along_outline",
      })

      const packPlacements: Record<
        string,
        { x: number; y: number; ccwRotationDegrees: number }
      > = {}
      for (const c of packOutput.components) {
        packPlacements[c.componentId] = {
          x: c.center.x,
          y: c.center.y,
          ccwRotationDegrees: (c.ccwRotationOffset / Math.PI) * 180,
        }
      }

      const circuit = makeCircuit([
        u1Chip({
          pinCount: 3,
          connections: {},
          schX: packPlacements["U1"]?.x,
          schY: packPlacements["U1"]?.y,
          schRotation: packPlacements["U1"]?.ccwRotationDegrees,
        }),
        resistor({
          name: "R1",
          schX: packPlacements["R1"]?.x,
          schY: packPlacements["R1"]?.y,
          schRotation: packPlacements["R1"]?.ccwRotationDegrees,
        }),
        capacitor({
          name: "C1",
          schX: packPlacements["C1"]?.x,
          schY: packPlacements["C1"]?.y,
          schRotation: packPlacements["C1"]?.ccwRotationDegrees,
        }),
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
