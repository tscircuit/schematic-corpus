import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R6",
      center: {
        x: 1.5601508656171121,
        y: -0.5443327784860807,
      },
      relative_to: "group_center",
    },
    {
      selector: "C4",
      center: {
        x: 2.5047424350400394,
        y: -0.35235060471794905,
      },
      relative_to: "group_center",
    },
    {
      selector: "J2",
      center: {
        x: 4.160320094620299,
        y: 0.09591362000383499,
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
          direction: "top-to-bottom",
        },
      }}
    />
    <jumper name="J2" pinCount={2} schDirection="left" />

    <resistor
      name="R6"
      schRotation="90deg"
      resistance="2k"
      connections={{ pin2: sel.U1.pin2 }}
    />
    <capacitor
      name="C4"
      capacitance="4.7uF"
      schRotation={90}
      connections={{ pin2: sel.J2.pin1 }}
    />
    <netlabel
      schX={1.5}
      schY={0.3}
      anchorSide="bottom"
      net="V_BATT"
      connectsTo={[sel.U1.pin1, sel.C4.pin2]}
    />
    <netlabel
      schX={3.3}
      schY={-1.3}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.J2.pin2, sel.C4.pin1, sel.R6.pin1, sel.U1.pin3]}
    />
  </board>
)
