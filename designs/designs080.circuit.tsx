import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [3, 5],
        },
      }}
    />
    <resistor
      name="R3"
      resistance="2.0k"
      schRotation={90}
      schX={0.8}
      schY={-0.8}
      connections={{
        pin2: sel.U1.pin5,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="R3.pin1"
      schX={0.8}
      schY={-1.6}
    />
    <capacitor
      name="C4"
      capacitance="4.7uf"
      schRotation={90}
      schX={2}
      connections={{
        pin2: sel.U1.pin3,
      }}
    />
    <netlabel
      net="VBATT"
      anchorSide="bottom"
      schX={2}
      schY={0.8}
      connection="C4.pin2"
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={2}
      schY={-0.8}
      connection="C4.pin1"
    />
    <solderjumper
      name="MEAS"
      pinCount={2}
      bridgedPins={[["1", "2"]]}
      schX={2.8}
      schY={0.7}
      connections={{
        pin1: sel.C4.pin2,
        pin2: sel.J3.pin1,
      }}
    />
    <pinheader
      name="J3"
      gender="female"
      pinCount={2}
      schX={4.2}
      schY={0.6}
      schFacingDirection="left"
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="J3.pin2"
      schX={3.3}
      schY={0.2}
    />
  </board>
)
