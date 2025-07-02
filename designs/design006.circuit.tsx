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
      selector: "D4",
      center: {
        x: 2.143603176289351,
        y: -0.3371530106348991,
      },
      relative_to: "group_center",
    },
    {
      selector: "C3",
      center: {
        x: 3.1203863667387717,
        y: -0.8184281491195643,
      },
      relative_to: "group_center",
    },
    {
      selector: "R5",
      center: {
        x: 1.203188228693789,
        y: -0.9935220999278451,
      },
      relative_to: "group_center",
    },
  ],
}
export default () => (
  <board routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schPinStyle={{
        pin1: { marginBottom: 0.1 },
        pin2: { marginTop: 0.1 },
      }}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin2: sel.R5.pin2, pin1: sel.D4.pin1 }}
    />

    <resistor
      name="R5"
      footprint="0402"
      schRotation="90deg"
      resistance="1k"
      connections={{ pin1: sel.D4.pin2 }}
    />
    <capacitor
      name="C3"
      footprint="0402"
      schRotation="90deg"
      capacitance="4.7uF"
      connections={{
        pin2: sel.D4.pin1,
      }}
    />
    <led name="D4" schRotation={-90} />
    <netlabel
      schX={3.12}
      schY={0.4}
      anchorSide="bottom"
      net="V_USB"
      connectsTo={[sel.C3.pin2, sel.D4.pin1]}
    />
    <netlabel
      schX={3.1203863667387717}
      schY={-2}
      connectsTo={sel.C3.pin1}
      net="GND"
      anchorSide="top"
    />
  </board>
)
