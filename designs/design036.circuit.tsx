import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R7",
      center: {
        x: 2.119299648467916,
        y: 1.518814148731773,
      },
      relative_to: "group_center",
    },
    {
      selector: "R8",
      center: {
        x: 3.615996447257434,
        y: 1.518814148731773,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 2.894358558892187,
        y: 2.8812023836244953,
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
          pins: [1, 2, 3, 4],
        },
      }}
      schPinStyle={{
        pin1: { marginBottom: 0.1 },
        pin2: { marginBottom: 0.1 },
        pin3: { marginBottom: 0.1 },
      }}
    />
    <resistor
      resistance="2.2k"
      name="R7"
      schRotation={90}
      connections={{ pin1: sel.U1.pin1, pin2: sel.JP1.pin3 }}
    />
    <resistor
      resistance="2.2k"
      name="R8"
      schRotation={90}
      connections={{ pin1: sel.U1.pin2, pin2: sel.JP1.pin1 }}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged12"
      pinCount={3}
      bridgedPins={[["pin3", "2"]]}
      schRotation={180}
    />
    <netlabel
      schX={4}
      schY={0.453}
      net="SCL_PB03"
      connectsTo={[sel.U1.pin1]}
      anchorSide="left"
    />
    <netlabel
      schX={4}
      schY={0.15}
      net="SDA_PB04"
      connectsTo={[sel.U1.pin2]}
      anchorSide="left"
    />
    <netlabel
      schX={1}
      schY={-0.78}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin4]}
    />
    <netlabel
      schX={1}
      schY={0.8}
      net="V3_3"
      connectsTo={[sel.U1.pin3]}
      anchorSide="bottom"
    />
    <netlabel
      schX={2.9}
      schY={3.5}
      net="V3_3"
      connectsTo={[sel.JP1.pin2]}
      anchorSide="bottom"
    />
  </board>
)
