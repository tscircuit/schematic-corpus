import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "bottom-to-top",
        },
      }}
      connections={{
        pin2: sel.net().OUT,
      }}
      schPinStyle={{
        pin1: { marginTop: 0.6 },
      }}
    />
    <netlabel
      schX={2}
      schY={2}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin2}
    />
    <capacitor
      name="C1"
      schX={2}
      schY={-1}
      polarized
      schRotation="90deg"
      connections={{
        pin2: sel.U1.pin2,
      }}
      // footprint="0402"
      capacitance="1uF"
    />
    <netlabel
      schX={2}
      schY={-2}
      connectsTo={sel.C1.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
