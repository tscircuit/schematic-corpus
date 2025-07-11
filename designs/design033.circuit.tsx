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
      selector: "JP1",
      center: {
        x: 1.5121129950222238,
        y: 1.103782864516479,
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
    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged12"
      pinCount={3}
      bridgedPins={[["pin3", "2"]]}
      connections={{ pin1: sel.U1.pin4 }}
    />
    <netlabel
      schX={1.5}
      schY={1.9}
      anchorSide="bottom"
      net="V_USB"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={1}
      schY={2.2}
      anchorSide="bottom"
      net="V_BATT"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={2}
      schY={1.7}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={2.6}
      schY={1.21}
      anchorSide="left"
      net="A0"
      connectsTo={sel.JP1.pin3}
    />
    <netlabel
      schX={2.5}
      schY={0.6}
      anchorSide="left"
      net="NRESET"
      connectsTo={sel.JP1.pin2}
    />
  </board>
)
