import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C1",
      center: {
        x: 2.6,
        y: -0.7,
      },
      relative_to: "group_center",
    },
    {
      selector: "R3",
      center: {
        x: 1.7,
        y: -0.7,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3],
        },
      }}
    />
    <resistor
      name="R3"
      resistance="2k"
      schRotation={90}
      connections={{ pin2: sel.U1.pin2 }}
    />
    <capacitor name="C1" capacitance="4.7uF" schRotation={90} />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={1}
      schY={-1.6}
      connectsTo={[sel.R3.pin1, sel.U1.pin3, sel.C1.pin1]}
    />
    <netlabel
      net="VCC_5V0"
      anchorSide="bottom"
      schX={2.6}
      schY={0.8}
      connectsTo={[sel.U1.pin1, sel.C1.pin2]}
    />
  </board>
)
