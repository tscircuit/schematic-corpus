import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U2"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 4],
        },
      }}
    />
    <capacitor
      name="C11"
      capacitance="1u"
      schRotation={90}
      schX={1.5}
      schY={1.8}
      connections={{
        pin2: sel.U2.pin4,
      }}
    />
    <netlabel
      net="VBUS"
      anchorSide="bottom"
      connection="C11.pin2"
      schX={1.95}
      schY={2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C11.pin1"
      schX={1.5}
      schY={1.1}
    />
    <led
      name="D4"
      color="Yellow"
      schX={3.5}
      schY={0.65}
      schRotation={-90}
      connections={{
        pin1: sel.R14.pin1,
        pin2: sel.U2.pin1,
      }}
    />
    <resistor
      name="R14"
      resistance="330"
      schX={3.5}
      schY={2.2}
      schRotation={90}
    />
    <netlabel
      net="V3_3_P"
      anchorSide="bottom"
      connection="R14.pin2"
      schX={3.5}
      schY={2.8}
    />
  </board>
)
