import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "D2",
      center: {
        x: 0.0018191543247429928,
        y: -0.8906409106184038,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits}>
    <diode name="D1" />
    <diode name="D2" />
    <netlabel
      schX={-1.7}
      schY={0.2}
      anchorSide="bottom"
      net="V_USB"
      connectsTo={sel.D2.pin1}
    />
    <netlabel
      schX={1.1}
      schY={0.2}
      anchorSide="bottom"
      net="VIN"
      connectsTo={[sel.D2.pin2, sel.D1.pin2]}
    />
    <netlabel
      schX={-0.9}
      schY={0.2}
      anchorSide="bottom"
      net="V_BATT"
      connectsTo={sel.D1.pin1}
    />
  </board>
)
