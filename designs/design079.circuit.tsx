import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [2, 3],
        },
        bottomSide: {
          direction: "bottom-to-top",
          pins: [1],
        },
      }}
      connections={{
        pin1: sel.R14.pin2,
        pin3: sel.R15.pin2,
      }}
    />
    <resistor name="R14" resistance="715" schRotation={90} schY={-2.5} />
    <netlabel net="GND" anchorSide="top" connection="R14.pin1" schY={-3.3} />
    <resistor
      name="R15"
      resistance="240"
      schRotation={90}
      schX={1}
      schY={-0.85}
      connections={{
        pin1: sel.R14.pin2,
        pin2: sel.U1.pin2,
      }}
    />
    <capacitor
      name="C3"
      capacitance="10uf"
      schRotation={-90}
      schX={2}
      schY={-0.6}
      polarized
      connections={{
        pin1: sel.U1.pin3,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C3.pin2"
      schX={2}
      schY={-1.3}
    />
    <capacitor
      name="C4"
      capacitance="0.1"
      schRotation={90}
      schX={3}
      schY={-0.6}
      connections={{
        pin2: sel.U1.pin3,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C4.pin1"
      schX={3}
      schY={-1.3}
    />
    <netlabel
      net="V5"
      anchorSide="bottom"
      connection="C4.pin2"
      schY={0.3}
      schX={3}
    />
  </board>
)
