import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "JP1",
      center: {
        x: 2.8,
        y: -0.4,
      },
      relative_to: "group_center",
    },
    {
      selector: "C17",
      center: {
        x: 1.1,
        y: -0.7,
      },
      relative_to: "group_center",
    },
    {
      selector: "R4",
      center: {
        x: 2.8,
        y: -1.8,
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
      selector: "D3",
      center: {
        x: 2.8,
        y: -3.3,
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
          pins: [1, 2],
        },
      }}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      schRotation={90}
      connections={{ pin2: sel.U1.pin1, pin1: sel.R4.pin2 }}
    />
    <capacitor
      name="C17"
      capacitance="0.1uF"
      schRotation={90}
      connections={{ pin2: sel.U1.pin1 }}
    />
    <resistor
      name="R4"
      schRotation={90}
      resistance="1k"
      connections={{ pin1: sel.D3.pin1 }}
    />
    <led name="D3" color="RED" schRotation={-90} />
    <netlabel
      schX={0.85}
      schY={0.4}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={[sel.U1.pin1]}
    />
    <netlabel
      schX={1.1}
      schY={-1.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C17.pin1}
    />
    <netlabel
      schX={2.8}
      schY={-4.2}
      net="GND"
      anchorSide="top"
      connectsTo={sel.D3.pin2}
    />
  </board>
)
