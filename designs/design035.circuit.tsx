import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4],
        },
      }}
      connections={{
        pin3: sel.net.V3_3,
        pin4: sel.net.GND,
      }}
    />
    <netlabel
      schX={1}
      schY={-0.78}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin4, sel.U1.pin3]}
    />
    <netlabel
      schX={1}
      schY={0.8}
      net="VCC"
      connectsTo={[sel.U1.pin1, sel.U1.pin2]}
      anchorSide="bottom"
    />
  </board>
)
