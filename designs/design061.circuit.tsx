import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm" routingDisabled={true}>
    <chip
      name="U5"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
    />
    <netlabel
      net="GND"
      connection="U5.pin2"
      anchorSide="top"
      schX={1.05}
      schY={-1}
    />

    <solderjumper
      name="VE"
      schX={2.5}
      schY={-0.5}
      connections={{
        pin1: sel.U5.pin1,
      }}
    />
    <netlabel
      net="V3_3_EN"
      connection="VE.pin2"
      anchorSide="left"
      schX={3.2}
      schY={-0.5}
    />

    <diode
      name="D1"
      schRotation={90}
      schX={1.8}
      schY={-1.3}
      connections={{
        pin2: ".VE > .pin1",
      }}
    />
    <netlabel
      net="GND"
      connection="D1.pin1"
      anchorSide="top"
      schX={1.8}
      schY={-2.1}
    />

    <resistor
      name="R5"
      resistance="100k"
      schX={1.8}
      schRotation={90}
      schY={0.3}
      connections={{
        pin1: ".VE > .pin1",
        pin2: sel.U5.pin3,
      }}
    />
  </board>
)
