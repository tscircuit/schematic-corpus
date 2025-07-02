import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R11",
      center: {
        x: 1.37708444747778,
        y: 1.0514353032664412,
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
          pins: [1, 2, 3, 4, 5, 6],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin1: sel.R11.pin1 }}
    />

    <resistor name="R11" schRotation="90deg" resistance="100K" />
    <netlabel
      schX={1.7246073493080432}
      schY={1.6}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[sel.U1.pin5, sel.U1.pin6]}
    />
    <netlabel
      schX={1.38}
      schY={2}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[sel.R11.pin2]}
    />
    <netlabel
      schX={2}
      schY={0.515}
      connectsTo={sel.R11.pin1}
      net="FLASH_CS"
      anchorSide="left"
    />
    <netlabel
      schX={2}
      schY={0.315}
      connectsTo={sel.U1.pin2}
      net="FLASH_SCK"
      anchorSide="left"
    />
    <netlabel
      schX={2}
      schY={0.115}
      connectsTo={sel.U1.pin3}
      net="FLASH_SDI"
      anchorSide="left"
    />
    <netlabel
      schX={2}
      schY={-0.115}
      connectsTo={sel.U1.pin4}
      net="FLASH_SDO"
      anchorSide="left"
    />
  </board>
)
