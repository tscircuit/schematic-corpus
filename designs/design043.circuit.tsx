import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C10",
      center: {
        x: 1.2177875563479656,
        y: -0.14628574779098014,
      },
      relative_to: "group_center",
    },
    {
      selector: "C2",
      center: {
        x: 2.4013878480523805,
        y: -0.17471590255365455,
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
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.6 },
      }}
      connections={{ pin1: sel.C10.pin2 }}
    />
    <capacitor
      name="C10"
      capacitance="1uF"
      schRotation={90}
      connections={{ pin2: sel.C2.pin2 }}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      schRotation={90}
      connections={{ pin1: sel.C10.pin1 }}
    />
    <netlabel
      schX={1.2177875563479656}
      schY={-1.15}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C10.pin1}
    />
    <netlabel
      schX={0.8}
      schY={2.45}
      net="V3_3"
      connectsTo={sel.U1.pin1}
      anchorSide="bottom"
    />
  </board>
)
