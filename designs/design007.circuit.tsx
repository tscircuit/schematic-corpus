import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R1",
      center: {
        x: 1.129032258064243,
        y: -1.1803519061580718,
      },
      relative_to: "group_center",
    },
    {
      selector: "C3",
      center: {
        x: 1.7246073493080432,
        y: 0.003443294645892641,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schWidth={1}
      schPinStyle={{
        pin1: { marginBottom: 0.9 },
      }}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin2: sel.C3.pin1 }}
    />

    <capacitor
      name="C3"
      footprint="0402"
      schRotation="90deg"
      capacitance="4.7uF"
      connections={{
        pin2: sel.U1.pin1,
      }}
    />
    <netlabel
      schX={1.7246073493080432}
      schY={0.8}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[sel.C3.pin2]}
    />
    <netlabel
      schX={1.7246073493080432}
      schY={-0.8}
      connectsTo={sel.C3.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
