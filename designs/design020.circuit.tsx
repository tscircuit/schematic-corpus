import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4],
          direction: "bottom-to-top",
        },
      }}
    />
    <netlabel
      schX="1.3"
      schY="0.3"
      anchorSide="left"
      net="SCL"
      connection={sel.U1.pin4}
    />
    <netlabel
      schX="1.3"
      schY="0.1"
      anchorSide="left"
      net="SDA"
      connection={sel.U1.pin3}
    />
    <netlabel
      schX="1.1"
      schY="0.5"
      anchorSide="bottom"
      net="V3_3"
      connection={sel.U1.pin2}
    />
    <netlabel
      schX="1.1"
      schY="-0.5"
      anchorSide="top"
      net="GND"
      connection={sel.U1.pin1}
    />
  </board>
)
