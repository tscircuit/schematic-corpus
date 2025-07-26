import { expect, test } from "bun:test"
import { promises as fs } from "fs"
import { join } from "path"

function getBbox(component: any) {
  return {
    left: component.center.x - component.size.width / 2,
    right: component.center.x + component.size.width / 2,
    top: component.center.y + component.size.height / 2,
    bottom: component.center.y - component.size.height / 2,
  }
}

function boxesOverlap(
  a: ReturnType<typeof getBbox>,
  b: ReturnType<typeof getBbox>,
): boolean {
  return !(
    a.right <= b.left ||
    a.left >= b.right ||
    a.top <= b.bottom ||
    a.bottom >= b.top
  )
}

test("schematic components do not overlap", async () => {
  const distDir = join(import.meta.dir, "..", "dist", "designs")
  const designNames = await fs.readdir(distDir)
  for (const designName of designNames) {
    const circuitPath = join(distDir, designName, "circuit.json")
    const text = await fs.readFile(circuitPath, "utf8")
    const circuit = JSON.parse(text) as any[]
    const components = circuit.filter((e) => e.type === "schematic_component")
    for (let i = 0; i < components.length; i++) {
      const bboxA = getBbox(components[i])
      for (let j = i + 1; j < components.length; j++) {
        const bboxB = getBbox(components[j])
        expect(boxesOverlap(bboxA, bboxB)).toBe(false)
      }
    }
  }
})
