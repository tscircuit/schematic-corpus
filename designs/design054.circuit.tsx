import { sel } from "tscircuit"
const manualEdits = {
  schematic_placements: [
    {
      selector: "C2",
      center: {
        x: 0.8046091265445721,
        y: 0.22938103904186713,
      },
      relative_to: "group_center",
    },
    {
      selector: "R1",
      center: {
        x: 0.0004896001122474038,
        y: 1.7440815586064047,
      },
      relative_to: "group_center",
    },
    {
      selector: "SW3",
      center: {
        x: 0,
        y: 0.4136389857014756,
      },
      relative_to: "group_center",
    },
    {
      selector: "C1",
      center: {
        x: -0.8335861253449377,
        y: 1,
      },
      relative_to: "group_center",
    },
  ],
}
export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits} routingDisabled>
    <resistor
      resistance="1k"
      footprint="0402"
      name="R1"
      schRotation={90}
      connections={{ pin1: [sel.SW3.pin2, sel.R1.pin1] }}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0402"
      name="C1"
      schX={-1}
      schY={1}
      pcbX={-3}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0402"
      name="C2"
      schRotation={90}
    />
    <switch name="SW3" schRotation={90} />
    <netlabel
      net="ARTEMIS_RTS"
      anchorSide="right"
      schX={-1.8}
      schY={1}
      connectsTo={sel.C1.pin1}
    />
    <netlabel
      net="ARTEMIS_RESET"
      anchorSide="left"
      schX={0.805}
      schY={1}
      connectsTo={[sel.C1.pin2, sel.C2.pin2]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schY={-0.6}
      connectsTo={sel.SW3.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schY={-0.6}
      schX={0.805}
      connectsTo={sel.C2.pin1}
    />
    <netlabel
      net="VCC_1"
      anchorSide="bottom"
      schY={3}
      connectsTo={sel.R1.pin2}
    />
  </board>
)
