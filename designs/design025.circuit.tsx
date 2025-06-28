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
      net="VCC"
      anchorSide="bottom"
      connection="U1.pin1"
    />
    <netlabel
      schX={1.2}
      schY={0}
      net="COPI"
      anchorSide="left"
      connection="U1.pin2"
    />
    <netlabel
      schX={1.2}
      schY={-0.4}
      net="GND"
      anchorSide="top"
      connection={"U1.pin3"}
    />
  </board>
)
