import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "LED1",
      center: {
        x: 1.7554124577997121,
        y: -1.7313540945489725,
      },
      relative_to: "group_center",
    },
    {
      selector: "R7",
      center: {
        x: 0.9925027121873304,
        y: -0.6493532097714396,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 2.4957059718647296,
        y: -0.34150108676768287,
      },
      relative_to: "group_center",
    },
    {
      selector: "TP1",
      center: {
        x: 1.5398958334680641,
        y: -0.10042900849851812,
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
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
    />

    <led name={"LED1"} schRotation={180} />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      schRotation={90}
      connections={{ pin1: sel.LED1.pin1 }}
    />

    <testpoint name="TP1" />

    <resistor
      name="R7"
      resistance="1k"
      schRotation={90}
      connections={{ pin2: [sel.U1.pin2, sel.TP1.pin1], pin1: sel.LED1.pin2 }}
    />

    <netlabel
      schX={2}
      schY={0.4}
      net="V_BATT"
      anchorSide="bottom"
      connectsTo={[sel.U1.pin1, sel.JP1.pin2]}
    />
  </board>
)
