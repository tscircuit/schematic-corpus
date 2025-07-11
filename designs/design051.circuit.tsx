import { sel } from "tscircuit"

export default () => (
  <board routingDisabled>
    <chip
      name="U1"
      schY={1}
      schPinArrangement={{
        rightSide: {
          pins: [1],
          direction: "top-to-bottom",
        },
      }}
    />
    <netlabel
      schX={3.5}
      schY={1.25}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.JP1.pin2}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      schX={1.25}
      schY={1}
      bridgedPins={[["pin1", "pin2"]]}
      connections={{ pin1: sel.U1.pin1 }}
    />
    <capacitor
      name="C1"
      capacitance="100n"
      schRotation={90}
      schY={0.2}
      schX={2}
      connections={{ pin2: sel.JP1.pin2 }}
    />
    <capacitor
      name="C2"
      capacitance="100n"
      schRotation={90}
      schY={0.2}
      schX={2.75}
      connections={{ pin2: sel.JP1.pin2 }}
    />
    <capacitor
      name="C3"
      capacitance="100n"
      schRotation={90}
      schX={3.5}
      schY={0.2}
      connections={{ pin2: sel.JP1.pin2 }}
    />
    <netlabel
      schX={2}
      schY={-0.55}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C1.pin1}
    />
    <netlabel
      schX={2.75}
      schY={-0.55}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C2.pin1}
    />
    <netlabel
      schX={3.5}
      schY={-0.55}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C3.pin1}
    />
  </board>
)
