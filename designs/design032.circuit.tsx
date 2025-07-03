import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "U1",
      center: {
        x: 0.2,
        y: 1.609699501685428,
      },
      relative_to: "group_center",
    },
    {
      selector: "R12",
      center: {
        x: 1.0859937446991865,
        y: 2.8007718147947545,
      },
      relative_to: "group_center",
    },
    {
      selector: "R16",
      center: {
        x: 1.5554986651850113,
        y: 2.647891945196373,
      },
      relative_to: "group_center",
    },
    {
      selector: "R14",
      center: {
        x: 3.0230970024452644,
        y: 2.8007718147947545,
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
          pins: [1, 2, 3, 4],
          direction: "top-to-bottom",
        },
      }}
    />
    <resistor
      name="R16"
      resistance="5.1k"
      schRotation={90}
      connections={{ pin1: sel.U1.pin4 }}
    />

    <netlabel
      schX={1.5554986651850113}
      schY={3.43}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.R16.pin2}
    />
    <netlabel
      schX={1}
      schY={2.2}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={2.1}
      schY={1.73}
      anchorSide="left"
      net="DBG_SDA"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={2.1}
      schY={1.52}
      anchorSide="left"
      net="DBG_SCL"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={2.1}
      schY={1.31}
      anchorSide="left"
      net="DBG_WP"
      connectsTo={sel.U1.pin4}
    />
  </board>
)
