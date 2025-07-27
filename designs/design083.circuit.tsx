import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C17",
      center: {
        x: 1.7,
        y: -1.1,
      },
      relative_to: "group_center",
    },
    {
      selector: "R4",
      center: {
        x: 1.7,
        y: -0.1,
      },
      relative_to: "group_center",
    },
    {
      selector: "U1",
      center: {
        x: -0.1,
        y: 0.1,
      },
      relative_to: "group_center",
    },
    {
      selector: "C18",
      center: {
        x: 3.2,
        y: -0.5,
      },
      relative_to: "group_center",
    },
    {
      selector: "C19",
      center: {
        x: 1.7,
        y: 0.9,
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
          pins: [1, 2, 3, 4, 5],
        },
      }}
    />

    <capacitor
      name="C17"
      capacitance="0.1uF"
      connections={{ pin2: sel.R4.pin2, pin1: sel.R4.pin1 }}
    />
    <capacitor
      name="C19"
      capacitance="0.1uF"
      connections={{ pin2: sel.U1.pin1, pin1: sel.U1.pin2 }}
    />

    <capacitor
      name="C18"
      capacitance="0.1uF"
      schRotation={90}
      connections={{ pin2: sel.U1.pin3 }}
    />

    <resistor
      name="R4"
      resistance="1k"
      connections={{ pin1: sel.U1.pin4, pin2: sel.U1.pin3 }}
    />

    <netlabel
      schX={3.2}
      schY={-1.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C18.pin1}
    />
    <netlabel
      schX={0.8}
      schY={-1.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin5}
    />
  </board>
)
