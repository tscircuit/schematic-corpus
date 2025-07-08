import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C17",
      center: {
        x: 2.068592949571936,
        y: 0.0476545071026474,
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
        pin1: { marginBottom: 0.2 },
        pin2: { marginBottom: 0.2 },
        pin3: { marginBottom: 0.2 },
      }}
    />
    <capacitor
      name="C17"
      capacitance="0.1uf"
      schRotation={90}
      connections={{ pin2: [sel.U1.pin1, sel.U1.pin2] }}
    />
    <netlabel
      schX={2.07}
      schY={0.9}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.C17.pin2}
    />
    <netlabel
      schX={1.008}
      schY={-0.8}
      net="GND"
      anchorSide="top"
      connectsTo={[sel.U1.pin4, sel.U1.pin3]}
    />
    <netlabel
      schX={2.07}
      schY={-0.8}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C17.pin1}
    />
  </board>
)
