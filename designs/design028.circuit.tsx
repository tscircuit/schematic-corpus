import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schWidth={1}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "top-to-bottom",
        },
      }}
    />
    <netlabel
      schX={1.2}
      schY={0.4}
      net="V5"
      anchorSide="bottom"
      connectsTo={[sel.U1.pin2, sel.U1.pin1]}
    />
    <netlabel
      schX={1.2}
      schY={-0.4}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin3}
    />
  </board>
)
