import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "LED1",
      center: {
        x: 1.4870804110301075,
        y: -0.4370946007929535,
      },
      relative_to: "group_center",
    },
    {
      selector: "C1",
      center: {
        x: 2.41340610944933,
        y: -0.45312687708917676,
      },
      relative_to: "group_center",
    },
    {
      selector: "R7",
      center: {
        x: 1.4935390170893112,
        y: -1.8921791422282215,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 3.2266721644506515,
        y: 0.09807178235278917,
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
      connections={{ pin1: sel.LED1.pin1, pin2: sel.R7.pin1 }}
    />

    <resistor name="R7" resistance="1k" schRotation={90} />
    <capacitor name="C1" capacitance="0.1F" schRotation={90} />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      connections={{ pin1: sel.C1.pin2 }}
    />
    <led
      name={"LED1"}
      schRotation={-90}
      connections={{ pin1: sel.C1.pin2, pin2: sel.R7.pin2 }}
    />
    <netlabel
      schX={2.41340610944933}
      schY={0.4}
      net="V5"
      anchorSide="bottom"
      connectsTo={sel.C1.pin2}
    />
    <netlabel
      schX={4}
      schY={0.4}
      net="VIN"
      anchorSide="bottom"
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      schX={2.41340610944933}
      schY={-1.458628187432211}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C1.pin1}
    />
  </board>
)
