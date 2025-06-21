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
      selector: "U1",
      center: {
        x: 0.08296876830378241,
        y: -0.0385400686131315,
      },
      relative_to: "group_center",
    },
    {
      selector: "R10",
      center: {
        x: 2.1989320007259763,
        y: 0.17956345498218956,
      },
      relative_to: "group_center",
    },
    {
      selector: "R9",
      center: {
        x: 2.193107003477409,
        y: 0.9663469282982344,
      },
      relative_to: "group_center",
    },
    {
      selector: "R1",
      center: {
        x: 1.5009264008763734,
        y: -1.568768305234723,
      },
      relative_to: "group_center",
    },
    {
      selector: "R2",
      center: {
        x: 2.7457836656202916,
        y: -1.567686294702973,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      footprint="soic7"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4, 5, 6, 7],
          direction: "top-to-bottom",
        },
      }}
    />
    <resistor
      name="R1"
      footprint="0402"
      schRotation="90deg"
      resistance="5.1k"
      connections={{
        pin2: sel.U1.pin5,
      }}
    />
    <resistor
      name="R2"
      footprint="0402"
      schRotation="90deg"
      resistance="5.1k"
      connections={{
        pin2: sel.U1.pin4,
      }}
    />
    <resistor
      name="R9"
      footprint="0402"
      resistance="22"
      connections={{
        pin1: sel.U1.pin2,
      }}
    />
    <resistor
      name="R10"
      footprint="0402"
      resistance="22"
      connections={{
        pin1: sel.U1.pin3,
      }}
    />
    <netlabel
      schX={1}
      schY={1}
      anchorSide="bottom"
      net="V_USB"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={3}
      schY={0.9663469282982344}
      anchorSide="left"
      net="D+"
      connectsTo={sel.R9.pin2}
    />
    <netlabel
      schX={3}
      schY={0.17956345498218956}
      anchorSide="left"
      net="D-"
      connectsTo={sel.R10.pin2}
    />

    <netlabel
      schX={1}
      schY={-2.5}
      net="GND"
      connectsTo={[sel.U1.pin6, sel.U1.pin7]}
      anchorSide="top"
    />
    <netlabel
      schX={1.5}
      schY={-2.5}
      net="GND"
      connectsTo={sel.R1.pin1}
      anchorSide="top"
    />
    <netlabel
      schX={2.746742282865982}
      schY={-2.5}
      connectsTo={sel.R2.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
