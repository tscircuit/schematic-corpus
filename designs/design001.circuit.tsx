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
        pin1: sel.net.SCL,
        pin2: sel.net.SDA,
        pin3: sel.net.V3_3,
        pin4: sel.net.GND,
      }}
    />
    <netlabel
      schX={2}
      schY={-1}
      anchorSide="top"
      net="GND"
      connection="U1.pin4"
    />
    <netlabel
      schX={2}
      schY={0.8}
      net="VCC"
      connection="U1.pin3"
      anchorSide="bottom"
    />
  </board>
)
