import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3],
        },
      }}
      connections={{
        pin2: sel.U1.pin3,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin1"
      schX={1}
      schY={-0.5}
    />
    <capacitor
      name="C1"
      capacitance="0.1uf"
      schRotation={90}
      schX={1.8}
      schY={0.3}
      connections={{
        pin2: sel.U1.pin3,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C1.pin1"
      schX={1.8}
      schY={-0.5}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={["C5.pin2", "C1.pin2"]}
      schX={3.5}
      schY={1}
    />
    <capacitor
      name="C5"
      capacitance="10uf"
      schRotation={90}
      schX={3.5}
      schY={0.3}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C5.pin1"
      schX={3.5}
      schY={-0.5}
    />
  </board>
)
