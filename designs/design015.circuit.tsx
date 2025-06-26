import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <switch name="SW2" schRotation={-90} schX={1} />
    <capacitor
      name="C15"
      capacitance="0.1uF"
      schRotation={90}
      schY={-0.1}
      connections={{ pin2: [sel.SW2.pin1, sel.R8.pin1] }}
    />
    <resistor name="R8" resistance="4.7k" schY={1.5} schRotation={90} />
    <netlabel
      schX={0}
      schY={2.3}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.R8.pin2}
    />
    <netlabel
      schX={-0.3}
      schY={0.7}
      anchorSide="right"
      net="RESET"
      connectsTo={sel.C15.pin2}
    />
    <netlabel
      schX={1}
      schY={-1}
      anchorSide="top"
      net="GND"
      connectsTo={sel.SW2.pin2}
    />
    <netlabel
      schX={0}
      schY={-1}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C15.pin1}
    />
  </board>
)
