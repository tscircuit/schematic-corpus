import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
    />

    <netlabel
      schX={1.3}
      schY={0.4}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin1}
    />

    <netlabel
      schX={1.3}
      schY={-0.4}
      anchorSide="top"
      net="GND"
      connectsTo={sel.U1.pin2}
    />
  </board>
)
