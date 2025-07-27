import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4],
        },
      }}
      connections={{
        pin3: sel.U1.pin4,
      }}
    />
    <netlabel
      net="SCL"
      anchorSide="left"
      connection="U1.pin1"
      schX={2}
      schY={0.3}
    />
    <netlabel
      net="SDA"
      anchorSide="left"
      connection="U1.pin2"
      schX={2}
      schY={0.1}
    />
    <resistor
      name="R1"
      resistance="22"
      schX={0.9}
      schY={1.3}
      schRotation={90}
      connections={{ pin1: sel.U1.pin1 }}
    />{" "}
    <resistor
      name="R2"
      resistance="22"
      schRotation={90}
      schX={1.8}
      schY={1.3}
      connections={{ pin1: sel.U1.pin2 }}
    />
    <netlabel
      schX={1.35}
      schY={3.1}
      net="VCC"
      anchorSide="bottom"
      connection="JP1.pin2"
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper3"
      pinCount={3}
      schRotation={180}
      schX={1.35}
      schY={2.4}
      connections={{ pin1: sel.R2.pin2, pin3: sel.R1.pin2 }}
    />
  </board>
)
