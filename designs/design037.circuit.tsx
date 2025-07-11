import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R7",
      center: {
        x: 2.4656774234267718,
        y: -0.4119212265018479,
      },
      relative_to: "group_center",
    },
    {
      selector: "R8",
      center: {
        x: 3.42356435005807,
        y: -0.4119212265018479,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 1.8189948209575044,
        y: -0.582983881653447,
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
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4],
        },
      }}
    />
    <resistor
      resistance="2.2k"
      name="R7"
      schRotation={90}
      connections={{ pin2: sel.U1.pin2 }}
    />
    <resistor
      resistance="2.2k"
      name="R8"
      schRotation={90}
      connections={{ pin2: sel.U1.pin1 }}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      schRotation={90}
      connections={{ pin2: sel.U1.pin3 }}
    />
    <netlabel
      schX={2.468}
      schY={-1.15}
      net="GND"
      connectsTo={[sel.R7.pin1]}
      anchorSide="top"
    />
    <netlabel
      schX={3.423}
      schY={-1.15}
      net="GND"
      connectsTo={[sel.R8.pin1]}
      anchorSide="top"
    />
    <netlabel
      schX={1.82}
      schY={-1.25}
      net="GND"
      connectsTo={[sel.JP1.pin1]}
      anchorSide="top"
    />
    <netlabel
      schX={1}
      schY={-0.78}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin4]}
    />
    <netlabel
      schX={1}
      schY={-0.78}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin4]}
    />
  </board>
)
