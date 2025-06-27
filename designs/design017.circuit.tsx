import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schWidth={1}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4],
          direction: "bottom-to-top",
        },
      }}
    />
    <netlabel
      schX={1.12}
      schY={0.5}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={1.3}
      schY={0.32}
      anchorSide="left"
      net="SCL"
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      schX={1.3}
      schY={0.1}
      anchorSide="left"
      net="SDA"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={1.12}
      schY={-0.5}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin1]}
    />
  </board>
)
