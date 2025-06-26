import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C16",
      center: {
        x: 0.9030447184387592,
        y: -1.1616703003130064,
      },
      relative_to: "group_center",
    },
    {
      selector: "C17",
      center: {
        x: -0.9030447184387592,
        y: -1.1616703003130064,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits}>
    <crystal
      name="Y1"
      frequency="32.768kHz"
      loadCapacitance="20pF"
      pinVariant="two_pin"
    />
    <capacitor
      name="C16"
      capacitance="15pF"
      schRotation={90}
      connections={{ pin2: sel.Y1.pin2 }}
    />
    <capacitor
      name="C17"
      capacitance="15pF"
      schRotation={90}
      connections={{ pin2: sel.Y1.pin1 }}
    />
    <netlabel
      schX={1.3}
      schY={0}
      anchorSide="left"
      net="Y1_32KHZ_OUT"
      connectsTo={sel.Y1.pin2}
    />
    <netlabel
      schX={-1.3}
      schY={0}
      anchorSide="right"
      net="Y1_32KHZ_IN"
      connectsTo={sel.Y1.pin1}
    />
    <netlabel
      schX={0.9030447184387592}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C16.pin1}
    />
    <netlabel
      schX={-0.9030447184387592}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C17.pin1}
    />
  </board>
)
