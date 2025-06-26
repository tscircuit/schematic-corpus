import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <jumper
      name="J1"
      footprint="pinrow4"
      schPortArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{
        pin1: sel.net.SCL,
        pin2: sel.net.SDA,
        pin3: sel.net.MISO,
      }}
    />
    <netlabel
      schX="1"
      schY="-0.5"
      anchorSide="top"
      net="GND"
      connection="J1.pin4"
    />
  </board>
)
