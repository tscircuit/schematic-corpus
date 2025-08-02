import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U4"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [40, 44, 43, 6],
        },
      }}
      connections={{
        pin6: sel.C6.pin2,
      }}
    />
    <resistor
      name="R11"
      resistance="10k"
      schRotation={90}
      schX={1}
      schY={1.1}
      connections={{
        pin1: sel.U4.pin40,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="R11.pin2"
      schX={1}
      schY={1.9}
    />
    <capacitor
      name="C10"
      capacitance="0.1uf"
      schRotation={90}
      schX={1.5}
      schY={-0.9}
      connections={{
        pin2: sel.U4.pin43,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C10.pin1"
      schX={1.5}
      schY={-1.7}
    />
    <capacitor
      name="C8"
      capacitance="0.1uf"
      schRotation={90}
      schX={2.4}
      schY={-0.9}
      connections={{
        pin2: sel.U4.pin44,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C8.pin1"
      schX={2.4}
      schY={-1.7}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="C8.pin2"
      schX={2.4}
      schY={1.9}
    />
    <inductor
      name="L1"
      inductance="300hm"
      schX={4.28}
      schY={-1.6}
      schRotation={90}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="L1.pin2"
      schX={4.306}
      schY={-0.35}
    />
    <capacitor
      name="C6"
      capacitance="0.1uf"
      schRotation={90}
      schX={4.3}
      schY={-3.2}
      connections={{
        pin2: sel.L1.pin1,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C6.pin1"
      schX={4.3}
      schY={-4}
    />
  </board>
)
