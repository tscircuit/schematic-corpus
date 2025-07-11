import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U4"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
      schPinStyle={{
        pin3: {
          marginBottom: 0.2,
        },
        pin2: {
          marginBottom: 0.2,
        },
      }}
    />
    <resistor
      name="R3"
      resistance="220k"
      connections={{
        pin2: sel.U4.pin2,
      }}
      schRotation={90}
      schX={1.7}
      schY={-0.8}
    />
    <netlabel
      net="GND"
      connection="U4.pin1"
      anchorSide="top"
      schX={1}
      schY={-0.7}
    />
    <netlabel net="QWIIC_PWR" connection="U4.pin2" anchorSide="left" schX={2} />
    <netlabel
      net="GND"
      connection="R3.pin1"
      anchorSide="top"
      schX={1.7}
      schY={-1.7}
    />
    <netlabel
      net="UIN"
      connection="U4.pin3"
      anchorSide="bottom"
      schX={1}
      schY={0.7}
    />
  </board>
)
