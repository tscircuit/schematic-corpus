import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm" routingDisabled={true}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
      schX={0.2}
    />
    <netlabel
      net="QWIIC_PWR"
      connectsTo={["U1.pin1", "C9.pin2", "J3.pin2"]}
      anchorSide="left"
      schX={2}
      schY={0.1}
    />
    <capacitor
      name="C9"
      capacitance="1.0uf"
      schX={1.5}
      schY={-0.7}
      schRotation={90}
    />
    <netlabel
      net="GND"
      connection="C9.pin1"
      anchorSide="top"
      schX={1.5}
      schY={-1.5}
    />

    <pinheader
      name="J3"
      gender="female"
      pinLabels={["GND", "VCC", "SDA", "SCL"]}
      schWidth={0.7}
      pinCount={4}
      schX={1}
      schY={-3.8}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4],
          direction: "bottom-to-top",
        },
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="J3.pin1"
      schX={2.1}
      schY={-4.5}
    />

    <netlabel
      net="I2C_SDA"
      anchorSide="left"
      connectsTo={["J3.pin3", "R4.pin1"]}
      schX={5}
      schY={-3.7}
    />
    <netlabel
      net="I2C_SCL"
      anchorSide="left"
      connectsTo={["J3.pin4", "R1.pin1"]}
      schX={5}
      schY={-3.5}
    />
    <resistor
      name="R4"
      resistance="2.2k"
      schX={4.5}
      schY={-2.7}
      schRotation={90}
    />
    <resistor
      name="R1"
      resistance="2.2k"
      schX={3.3}
      schY={-2.7}
      schRotation={90}
    />
    <solderjumper
      name="JP1"
      pinCount={3}
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      schX={3.9}
      schY={-1.8}
      schRotation={180}
      connections={{
        pin1: sel.R4.pin2,
        pin3: sel.R1.pin2,
      }}
    />
    <netlabel
      net="QWIIC_PWR"
      anchorSide="left"
      connection="JP1.pin2"
      schX={3.9}
      schY={-1.2}
    />
  </board>
)
