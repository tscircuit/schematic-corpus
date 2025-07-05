import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <resistor
      name="R1"
      resistance="1k"
      schX={0}
      schY={0}
      schRotation={90}
      connections={{ pin1: sel.net.VCC, pin2: sel.C1.pin1 }}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      schX={1.2}
      schY={0}
      schRotation={90}
      connections={{ pin1: sel.R1.pin2, pin2: sel.net.GND }}
    />
    <netlabel
      schX={-0.3}
      schY={0.6}
      net="VCC"
      anchorSide="bottom"
      connection="R1.pin1"
    />
    <netlabel
      schX={1.5}
      schY={-0.6}
      net="GND"
      anchorSide="top"
      connection="C1.pin2"
    />
  </board>
)
