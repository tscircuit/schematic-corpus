import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="I2C_SENSOR"
      pinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "VCC",
        pin4: "GND",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VCC", "GND"],
        },
      }}
      connections={{
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
        VCC: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />
    <netlabel
      schX={2}
      schY={-1}
      anchorSide="top"
      net="GND"
      connection="U1.GND"
    />
    <netlabel
      schX={2}
      schY={0.8}
      net="VCC"
      connection="U1.VCC"
      anchorSide="bottom"
    />
  </board>
)
