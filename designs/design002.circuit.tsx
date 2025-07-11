import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="I2C_SENSOR"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4, 5],
          direction: "bottom-to-top",
        },
      }}
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net.EN,
        pin3: sel.net.MISO,
        pin4: sel.net.MOSI,
        pin5: sel.net.GND,
      }}
    />
    <netlabel
      schX={2}
      schY={-1}
      anchorSide="top"
      net="GND"
      connectsTo={sel.U1.pin5}
    />
    <netlabel
      schX={1.4}
      schY={0.8}
      net="VCC"
      connection={sel.U1.pin1}
      anchorSide="bottom"
    />
  </board>
)