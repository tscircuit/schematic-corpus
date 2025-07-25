import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U2"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3],
        },
      }}
      connections={{
        pin2: sel.U2.pin3,
        pin3: sel.C7.pin2,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["U2.pin1", "C7.pin1"]}
      schX={1}
      schY={-0.8}
    />
    <netlabel
      net="VIN"
      anchorSide="bottom"
      connection="C7.pin2"
      schX={3}
      schY={1}
    />

    <capacitor name="C7" capacitance="1.0uf" schRotation={90} schX={2} />
  </board>
)
