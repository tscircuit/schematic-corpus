import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin2: sel.U2.pin1 }}
    />
    <chip
      name="U2"
      schPinArrangement={{
        leftSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
      schX={3.5}
      schY={-2.3}
    />

    <resistor
      name="R1"
      schRotation="90deg"
      schX={1.8}
      schY={-0.35}
      resistance="2k"
      connections={{ pin2: sel.U1.pin1 }}
    />
    <capacitor
      name="C1"
      capacitance="4.7uF"
      schRotation={90}
      schX={3.2}
      schY={-0.35}
      connections={{ pin2: sel.R1.pin2 }}
    />
    <netlabel
      schX={1.8}
      schY={-1.8}
      anchorSide="left"
      net="VREG_EN"
      connectsTo={[sel.U2.pin1, sel.R1.pin1]}
    />
    <netlabel
      schX={0.8}
      schY={-2.5}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin3, sel.U2.pin2]}
    />
    <netlabel
      schX={3.2}
      schY={-0.9}
      anchorSide="top"
      net="GND"
      connectsTo="C1.pin1"
    />
    <netlabel
      schX={3.2}
      schY={0.6}
      anchorSide="bottom"
      net="VIN"
      connectsTo="C1.pin2"
    />
  </board>
)
