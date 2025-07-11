import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3, 4, 5, 6],
        },
      }}
    />
    <netlabel
      schX={0.8}
      schY={-0.8}
      anchorSide="top"
      net="GND"
      connection="U1.pin1"
    />
    <netlabel
      schX={0.8}
      schY={1}
      net="VCC"
      anchorSide="bottom"
      connection="U1.pin2"
    />
    <netlabel
      schX={1}
      schY={0.5}
      anchorSide="left"
      net="N_INT"
      connection="U1.pin6"
    />
    <netlabel
      schX={1}
      schY={0.3}
      anchorSide="left"
      net="DISABLE"
      connection="U1.pin5"
    />
    <netlabel
      schX={1}
      schY={0.1}
      anchorSide="left"
      net="SCL"
      connection="U1.pin4"
    />
    <netlabel
      schX={1}
      schY={-0.1}
      anchorSide="left"
      net="SDL"
      connection="U1.pin3"
    />
  </board>
)
