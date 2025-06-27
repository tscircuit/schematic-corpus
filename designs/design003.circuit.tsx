import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <jumper
      name="U1"
      pinCount={2}
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
