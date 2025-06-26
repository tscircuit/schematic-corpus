import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "C14",
      center: {
        x: 1.2908640853763127,
        y: -1.2991442203763301,
      },
      relative_to: "group_center",
    },
    {
      selector: "C13",
      center: {
        x: 0.13889459854840291,
        y: -1.2991442203763301,
      },
      relative_to: "group_center",
    },
    {
      selector: "C12",
      center: {
        x: -0.9584792593010728,
        y: -1.2991442203763301,
      },
      relative_to: "group_center",
    },
    {
      selector: "C11",
      center: {
        x: -2.0558531171505487,
        y: -1.2991442203763301,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits}>
    <capacitor name="C11" capacitance="0.1uF" schRotation={90} />
    <capacitor name="C12" capacitance="0.1uF" schRotation={90} />
    <capacitor name="C13" capacitance="0.1uF" schRotation={90} />
    <capacitor name="C14" capacitance="0.1uF" schRotation={90} />
    <netlabel
      schX={-2.0558531171505487}
      schY={0}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[sel.C11.pin2, sel.C12.pin2, sel.C13.pin2, sel.C14.pin2]}
    />
    <netlabel
      schX={1.2908640853763127}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C14.pin1}
    />
    <netlabel
      schX={0.13889459854840291}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C13.pin1}
    />
    <netlabel
      schX={-0.9584792593010728}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C12.pin1}
    />
    <netlabel
      schX={-2.0558531171505487}
      schY={-2.3}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C11.pin1}
    />
  </board>
)
