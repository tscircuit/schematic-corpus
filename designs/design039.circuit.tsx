import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R7",
      center: {
        x: 1.5676609698297388,
        y: -1.3351859467815175,
      },
      relative_to: "group_center",
    },
    {
      selector: "R8",
      center: {
        x: 2.8379211489886935,
        y: -1.3351859467815175,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 2.190949346428541,
        y: -0.20780632897639337,
      },
      relative_to: "group_center",
    },
    {
      selector: "C16",
      center: {
        x: 3.841189794596829,
        y: -0.18924634501853108,
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
          pins: [1, 2, 3],
        },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.1 },
        pin2: { marginBottom: 0.1 },
        pin3: { marginBottom: 0.1 },
      }}
      connections={{ pin1: sel.C16.pin2 }}
    />
    <resistor
      resistance="2.2k"
      name="R7"
      schRotation={90}
      connections={{ pin2: sel.JP1.pin3 }}
    />
    <resistor
      resistance="2.2k"
      name="R8"
      schRotation={90}
      connections={{ pin2: sel.JP1.pin1 }}
    />
    <capacitor name="C16" schRotation={90} capacitance="4.7uF" />
    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged12"
      pinCount={3}
      bridgedPins={[["pin3", "2"]]}
      schRotation={180}
      connections={{ pin2: sel.U1.pin2 }}
    />

    <netlabel
      schX={1}
      schY={-0.5}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin3]}
    />
    <netlabel
      schX={3.84}
      schY={-1}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.C16.pin1]}
    />
    <netlabel
      schX={1.57}
      schY={-2.1}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.R7.pin1]}
    />
    <netlabel
      schX={2.835}
      schY={-2.1}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.R8.pin1]}
    />

    <netlabel
      schX={3.84}
      schY={0.7}
      net="V3_3"
      connectsTo={sel.C16.pin2}
      anchorSide="bottom"
    />
  </board>
)
