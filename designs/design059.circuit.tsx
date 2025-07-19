import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3],
        },
      }}
    />
    <chip
      name="JP4"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
      schY={0.1}
      schX={5.5}
      connections={{ pin1: sel.U1.pin1 }}
    />

    <resistor
      name="R7"
      resistance="1k"
      schRotation={90}
      connections={{ pin2: sel.JP1.pin3 }}
      schX={1.7}
      schY={-1.5}
    />
    <resistor
      name="R8"
      resistance="1k"
      schRotation={90}
      connections={{ pin2: sel.JP1.pin1 }}
      schX={2.6}
      schY={-1.5}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged23"
      pinCount={3}
      schX={2.15}
      schRotation={180}
      schY={-0.55}
      bridgedPins={[["pin3", "2"]]}
      connections={{ pin2: sel.U1.pin2 }}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0402"
      name="C1"
      schX={3.65}
      schY={-0.55}
      schRotation={90}
      connections={{ pin2: sel.JP4.pin1 }}
    />
    <netlabel
      schX={4.5}
      schY={0.4}
      net="V_BATT"
      anchorSide="bottom"
      connectsTo={sel.U1.pin1}
    />

    <netlabel
      schX={4.5}
      schY={-0.4}
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP4.pin2}
    />
    <netlabel
      schX={1.7}
      schY={-2.3}
      net="GND"
      anchorSide="top"
      connectsTo={sel.R7.pin1}
    />
    <netlabel
      schX={2.6}
      schY={-2.3}
      net="GND"
      anchorSide="top"
      connectsTo={sel.R8.pin1}
    />
    <netlabel
      schX={0.9}
      schY={-0.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={3.65}
      schY={-1.4}
      net="GND"
      anchorSide="top"
      connectsTo={sel.C1.pin1}
    />
  </board>
)
