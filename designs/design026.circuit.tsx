import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C16",
      center: {
        x: 1.8047692924586682,
        y: -0.30531546479810595,
      },
      relative_to: "group_center",
    },
    {
      selector: "C6",
      center: {
        x: 2.9975939099066515,
        y: -0.30531546479810595,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schX="0.5"
      schY="0.147"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
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
      net="V3_3"
      connectsTo={sel.C6.pin1}
    />
    <capacitor name="C6" polarized schRotation="270" capacitance="10uF" />
    <capacitor
      name="C16"
      capacitance="1.0uF"
      schRotation={90}
      connections={{
        pin2: [sel.U1.pin2, sel.C6.pin1],
      }}
    />
    <netlabel
      schX={3}
      schY={-1.2}
      connectsTo={sel.C6.pin2}
      net="GND"
      anchorSide="top"
    />
    <netlabel
      schX={1.805}
      schY={-1.2}
      connectsTo={sel.C16.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
