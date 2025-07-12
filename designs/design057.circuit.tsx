import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "LED1",
      center: {
        x: 1.4870804110301075,
        y: -0.4370946007929535,
      },
      relative_to: "group_center",
    },
    {
      selector: "C1",
      center: {
        x: 2.41340610944933,
        y: -0.45312687708917676,
      },
      relative_to: "group_center",
    },
    {
      selector: "R7",
      center: {
        x: 1.6861488826744984,
        y: -0.5510457706748343,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP4",
      center: {
        x: 3.432726818598366,
        y: 0.09938407369326435,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits} routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3],
        },
      }}
    />
    <chip
      name="JP4"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
      connections={{ pin1: sel.U1.pin1 }}
    />

    <resistor
      name="R7"
      resistance="1k"
      schRotation={90}
      connections={{ pin2: sel.U1.pin2 }}
    />

    <netlabel
      schX={1.6861488826744984}
      schY={0.4}
      net="V_BATT"
      anchorSide="bottom"
      connectsTo={sel.U1.pin1}
    />

    <netlabel
      schX={2.61340610944933}
      schY={-0.3}
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP4.pin2}
    />
    <netlabel
      schX={1.685}
      schY={-1.458628187432211}
      net="GND"
      anchorSide="top"
      connectsTo={sel.R7.pin1}
    />
    <netlabel
      schX={0.9}
      schY={-0.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin3}
    />
  </board>
)
