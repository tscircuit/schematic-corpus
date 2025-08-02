export const range = (end: number) =>
  Array.from({ length: end }, (_, i) => i + 1)

export const u1Chip = (props: {
  pinCount: number
  connections: Record<string, string>
}) =>
  `<chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ${JSON.stringify(range(props.pinCount))},
        },
      }}
      connections={${JSON.stringify(props.connections)}}
    />`

export const resistor = (props: {
  name: string
  schX?: number
  schY?: number
  schRotation?: number
  connections?: Record<string, string>
}) =>
  `<resistor name="${props.name}" resistance="1k" schX={${props.schX ?? 0}} schY={${props.schY ?? 0}} schRotation={${props.schRotation ?? 0}} connections={${JSON.stringify(props.connections ?? {})}} />`

export const capacitor = (props: {
  name: string
  schX?: number
  schY?: number
  schRotation?: number
  connections?: Record<string, string>
}) =>
  `<capacitor name="${props.name}" capacitance="100nF" schX={${props.schX ?? 0}} schY={${props.schY ?? 0}} schRotation={${props.schRotation ?? 0}} connections={${JSON.stringify(props.connections ?? {})}} />`

export const trace = (props: { from: string; to: string }) =>
  `<trace from="${props.from}" to="${props.to}" />`

export const makeCircuit = (elms: string[]) => {
  return `<board schLayout={{ layoutMode: "relative" }}>\n${elms.join("\n")}\n</board>`
}
