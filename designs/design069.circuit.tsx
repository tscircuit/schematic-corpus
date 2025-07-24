import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [6, 7, 5],
        },
      }}
    />

    <pinheader
      name="JP1"
      gender="female"
      pinCount={6}
      schFacingDirection="left"
      schX={3.8}
      schY={0.1}
      connections={{
        pin3: sel.U1.pin5,
        pin4: sel.U1.pin7,
        pin6: sel.U1.pin6,
      }}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={2}
      schY={1.8}
      connectsTo={["JP1.pin2", "R1.pin2"]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="JP1.pin1"
      schX={5}
      schY={1.4}
    />
    <resistor
      name="R1"
      resistance="10k"
      schRotation={90}
      schX={1.3}
      schY={1}
      connections={{
        pin1: sel.U1.pin6,
      }}
    />
  </board>
)
