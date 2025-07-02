import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R3",
      center: {
        x: 1.8047692924586682,
        y: -0.30531546479810595,
      },
      relative_to: "group_center",
    },
    {
      selector: "C1",
      center: {
        x: 2.9975939099066515,
        y: -0.2360076117178601,
      },
      relative_to: "group_center",
    },
    {
      selector: "U1",
      center: {
        x: 0.12295810448080197,
        y: -0.045204957975968095,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
      schPinStyle={{
        pin1: { marginTop: 0.1 },
        pin2: { marginTop: 0.1 },
      }}
    />
    <netlabel
      schX={3}
      schY={0.5}
      anchorSide="bottom"
      net="VIN"
      connectsTo={sel.C1.pin2}
    />
    <netlabel
      schX={2}
      schY={-0.825}
      anchorSide="left"
      net="EN"
      connectsTo={sel.R3.pin1}
    />
    <capacitor name="C1" polarized schRotation="90deg" capacitance="1uF" />
    <resistor
      name="R3"
      resistance="10k"
      schRotation={90}
      connections={{
        pin2: [sel.U1.pin3, sel.C1.pin2],
        pin1: sel.U1.pin2,
      }}
    />
    <netlabel
      schX={3}
      schY={-2}
      connectsTo={sel.C1.pin1}
      net="GND"
      anchorSide="top"
    />
    <netlabel
      schX={1}
      schY={-2}
      connectsTo={sel.U1.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
