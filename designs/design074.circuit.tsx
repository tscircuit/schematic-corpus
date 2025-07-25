import { sel } from "tscircuit"
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [7, 5, 4, 8],
        },
      }}
      connections={{
        pin7: sel.C6.pin2,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["U1.pin8", "U1.pin4"]}
      schX={0.9}
      schY={-0.8}
    />
    <resistor
      name="R4"
      resistance="100k"
      schRotation={90}
      schX={1.5}
      connections={{
        pin2: sel.U1.pin5,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="R4.pin1"
      schX={1.5}
      schY={-0.8}
    />
    <resistor
      name="R1"
      resistance="750k"
      schX={2.5}
      schY={0.55}
      connections={{
        pin1: sel.R4.pin2,
      }}
    />
    <capacitor
      name="C6"
      capacitance="22uf"
      schX={3.5}
      schY={-0.1}
      schRotation={90}
    />
    <netlabel
      net="V5"
      anchorSide="bottom"
      connectsTo={["C6.pin2", "R1.pin2"]}
      schX={3.5}
      schY={1.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C6.pin1"
      schX={3.5}
      schY={-0.8}
    />
  </board>
)
