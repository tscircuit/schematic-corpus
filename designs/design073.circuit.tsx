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
        pin3: sel.C8.pin2,
      }}
    />
    <netlabel
      net="V5"
      anchorSide="bottom"
      connectsTo={["U1.pin2", "C7.pin2"]}
      schX={1.3}
      schY={0.9}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin1"
      schX={1}
      schY={-0.5}
    />
    <capacitor
      name="C7"
      capacitance="0.1uf"
      schRotation={90}
      schX={1.8}
      schY={0}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C7.pin1"
      schX={1.8}
      schY={-0.8}
    />
    <netlabel
      net="V1_8"
      anchorSide="bottom"
      connection="C8.pin2"
      schX={3}
      schY={0.9}
    />
    <capacitor name="C8" capacitance="10uf" schRotation={90} schX={3} />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C8.pin1"
      schX={3}
      schY={-0.8}
    />
  </board>
)
