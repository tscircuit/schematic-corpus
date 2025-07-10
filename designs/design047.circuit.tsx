import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4],
          direction: "bottom-to-top",
        },
      }}
    />
    <capacitor
      name="C1"
      capacitance="100n"
      schRotation={180}
      schX={3.3}
      schY={1.7}
    />
    <resistor
      name="R1"
      resistance="10k"
      schRotation={90}
      schX={1.5}
      schY={0.8}
      connections={{ pin1: sel.U1.pin1,pin2:sel.C1.pin2}}
    />
    <resistor
      name="R2"
      resistance="10k"
      schRotation={90}
      schX={2.5}
      schY={0.8}
      connections={{ pin1: sel.U1.pin2,pin2:sel.C1.pin2}}

    />
    <netlabel
      schX={0.6}
      schY={1.7}
      net="SDI0_VDD"
      anchorSide="right"
      connectsTo={[sel.U1.pin4, sel.C1.pin2]}
    />
    <netlabel
      schX={3}
      schY={-0.1}
      net="GPI07"
      anchorSide="left"
      connection="U1.pin2"
    />
    <netlabel
      schX={3}
      schY={-0.3}
      net="GPI02"
      anchorSide="left"
      connection="U1.pin1"
    />
    <netlabel
      schX={0.8}
      schY={-0.7}
      net="GND"
      anchorSide="top"
      connection="U1.pin3"
    />
    <netlabel
      schX={4.2}
      schY={1.3}
      net="GND"
      anchorSide="top"
      connection="C1.pin1"
    />
  </board>
)