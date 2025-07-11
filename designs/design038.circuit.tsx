import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R7",
      center: {
        x: 1.2903698145600535,
        y: 0.6979990351096542,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 1.6488712810168582,
        y: -0.5996349901814374,
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
      connections={{ pin1: sel.U1.pin2 }}
    />
    {/* <resistor resistance="2.2k" name="R8" schRotation={90} connections={{pin2:sel.U1.pin1}}/> */}
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      schRotation={90}
      connections={{ pin2: sel.U1.pin3 }}
    />
    <netlabel
      schX={1.7}
      schY={0.15}
      net="SD_CS_PA07"
      anchorSide="left"
      connectsTo={sel.R7.pin1}
    />
    <netlabel
      schX={1.65}
      schY={-1.15}
      net="GND"
      connectsTo={[sel.JP1.pin1]}
      anchorSide="top"
    />
    <netlabel
      schX={0.8}
      schY={0.8}
      net="V3_3"
      connectsTo={sel.U1.pin1}
      anchorSide="bottom"
    />
    <netlabel
      schX={1.29}
      schY={1.5}
      net="V3_3"
      connectsTo={sel.R7.pin2}
      anchorSide="bottom"
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
