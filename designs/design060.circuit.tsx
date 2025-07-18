import { sel } from "@tscircuit/core"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U9"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
    />
    <capacitor
      name="C13"
      capacitance="2.2uF"
      schRotation={90}
      schX={2}
      schY={-0.8}
    />
    <resistor
      name="R22"
      resistance="1M"
      schRotation={90}
      schX={3.1}
      schY={-0.8}
    />
    <netlabel
      net="GND"
      connection="R22.pin1"
      anchorSide="top"
      schX={3.1}
      schY={-1.7}
    />
    <netlabel
      net="GND"
      connection="U9.pin1"
      anchorSide="top"
      schX={1.1}
      schY={-1.7}
    />
    <netlabel
      net="PERIPH_POW"
      anchorSide="left"
      schX={3.5}
      connectsTo={["U9.pin2", "R22.pin2", "R21.pin1"]}
    />
    <netlabel
      net="VIN"
      connectsTo={["C13.pin2", "U9.pin3"]}
      anchorSide="bottom"
      schX={2}
      schY={0.5}
    />
    <netlabel
      net="GND"
      connection="C13.pin1"
      anchorSide="top"
      schX={2}
      schY={-1.7}
    />

    <resistor
      name="R21"
      resistance="10k"
      schRotation={90}
      schX={3.1}
      schY={0.8}
    />
    <solderjumper
      name="LP"
      bridgedPins={[["1", "2"]]}
      schX={4}
      schY={1.6}
      connections={{
        pin1: sel.R21.pin2,
      }}
    />
    <netlabel
      net="V3_3"
      connection="LP.pin2"
      anchorSide="bottom"
      schX={5}
      schY={2}
    />
  </board>
)
