import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <resistor
      resistance="1k"
      footprint="0402"
      name="R1"
      schX={0}
      pcbX={3}
      schRotation={90}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0402"
      name="C1"
      schX={-1}
      schY={1}
      pcbX={-3}
    />
    <netlabel
      net="ARTEMIS_RTS"
      anchorSide="right"
      schX={-2}
      schY={1}
      connectsTo={sel.C1.pin1}
    />
    <netlabel
      net="ARTEMIS_BOOT"
      anchorSide="left"
      schX={1}
      schY={1}
      connectsTo={[sel.C1.pin2, sel.R1.pin2]}
    />
    <netlabel net="GND" anchorSide="top" schY={-1} connectsTo={sel.R1.pin1} />
  </board>
)
