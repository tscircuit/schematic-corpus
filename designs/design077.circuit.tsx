import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R7",
      center: {
        x: 1.7,
        y: -0.5,
      },
      relative_to: "group_center",
    },
    {
      selector: "TP1",
      center: {
        x: 0.9,
        y: -1.9,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 1.2,
        y: 1.1,
      },
      relative_to: "group_center",
    },
    {
      selector: "LED1",
      center: {
        x: -0.2,
        y: -1.9,
      },
      relative_to: "group_center",
    },
    {
      selector: "C17",
      center: {
        x: 2.3,
        y: -0.1,
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
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4],
        },
      }}
      connections={{
        pin1: sel.JP1.pin2,
        pin2: sel.net().FLASH_SHD,
        pin3: sel.net().FLASH_SCK,
        pin4: sel.net().FLASH_SDI,
      }}
    />

    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged12"
      pinCount={3}
      bridgedPins={[["pin1", "pin2"]]}
      connections={{ pin3: sel.net().FLASH_VDD }}
    />
    <capacitor
      name="C17"
      capacitance="0.1uF"
      schRotation={90}
      connections={{ pin2: sel.JP1.pin2 }}
    />
    <netlabel
      schX={0.5}
      schY={1.4}
      net="V_BATT"
      anchorSide="bottom"
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      schX={2.3}
      schY={-1}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C17.pin1}
    />
  </board>
)
