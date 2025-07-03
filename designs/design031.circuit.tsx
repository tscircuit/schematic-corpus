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
        x: 2.079559273911806,
        y: 2.8007718147947545,
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
  <board width="10mm" height="10mm" routingDisabled manualEdits={manualEdits}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        pin2: { marginBottom: 0.25 },
      }}
      connections={{
        pin1: sel.R12.pin1,
        pin2: sel.R16.pin1,
        pin3: sel.R14.pin1,
      }}
    />
    <resistor name="R12" resistance="100k" schRotation={90} />
    <resistor name="R16" resistance="5.1k" schRotation={90} />
    <resistor name="R14" resistance="5.1k" schRotation={90} />

    <netlabel
      schX={1.8}
      schY={0.9}
      anchorSide="top"
      net="GND"
      connection={sel.U1.pin4}
    />
    <netlabel
      schX={3.0230970024452644}
      schY={3.8}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[sel.R12.pin2, sel.R16.pin2, sel.R14.pin2]}
    />
    <netlabel
      schX={3.2}
      schY={2.05}
      anchorSide="left"
      net="DBG_SDA"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={3.2}
      schY={1.84}
      anchorSide="left"
      net="DBG_SCL"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={3.2}
      schY={1.39}
      anchorSide="left"
      net="DBG_WP"
      connectsTo={sel.U1.pin3}
    />
  </board>
)
