import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C21",
      center: {
        x: 1.5775213509843227,
        y: 0.7490385632794502,
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
        pin1: { marginBottom: 1 },
        pin2: { marginBottom: 1 },
      }}
      connections={{ pin1: sel.C21.pin2, pin2: sel.U1.pin1 }}
    />
    <capacitor name="C21" capacitance="22uF" schRotation={90} />
    <netlabel
      schX={1.5763991492976066}
      schY={0}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C21.pin1}
    />
    <netlabel
      schX={0.9}
      schY={-1.6}
      net="GND"
      anchorSide="top"
      connectsTo={[sel.U1.pin3, sel.U1.pin4]}
    />
    <netlabel
      schX={1.58}
      schY={1.5}
      net="V3_3"
      connectsTo={sel.U1.pin1}
      anchorSide="bottom"
    />
  </board>
)
