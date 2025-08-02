import { runTscircuitCode } from "tscircuit"

export const selectSchematicWithFewestCrossings = async (
  circuitCodes: string[],
): Promise<{ bestCircuitIndex: number; bestCircuitCode: string }> => {
  const circuitJsons = []
  for (const circuitCode of circuitCodes) {
    const circuitJson = await runTscircuitCode(circuitCode)
    circuitJsons.push(circuitJson)
  }

  let bestCircuitIndex = 0
  let lowestCrossings = Infinity
  for (let i = 0; i < circuitJsons.length; i++) {
    const circuitJson = circuitJsons[i]!
    let crossings = 0
    for (const elm of circuitJson) {
      if (elm.type === "schematic_trace") {
        crossings += elm.edges.filter((e) => e.is_crossing).length
      }
    }
    if (crossings < lowestCrossings) {
      lowestCrossings = crossings
      bestCircuitIndex = i
    }
  }

  return { bestCircuitIndex, bestCircuitCode: circuitCodes[bestCircuitIndex]! }
}
