import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "U1",
      center: {
        x: 0.2,
        y: 1.609699501685428,
      },
      relative_to: "group_center",
    },
    {
      selector: "R7",
      center: {
        x: 2.11592995735476,
        y: 0.6733143454630289,
      },
      relative_to: "group_center",
    },
    {
      selector: "C10",
      center: {
        x: 3.5,
        y: 1.164285077054331,
      },
      relative_to: "group_center",
    },
    {
      selector: "R8",
      center: {
        x: 2.8230529183269164,
        y: 0.6733143454630289,
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
          pins: [1, 2, 3, 4, 5, 6, 7],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin1: sel.C10.pin2, pin4: sel.R8.pin2, pin5: sel.R7.pin2 }}
    />
    <resistor name="R7" resistance="100k" schRotation={90} />
    <resistor name="R8" resistance="5.1k" schRotation={90} />
    <capacitor name="C10" capacitance="2.2uF" schRotation={90} />
    <netlabel
      schX={0.98}
      schY={0.5}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin7]}
    />
    <netlabel
      schX={1.4}
      schY={1.214}
      anchorSide="left"
      net="SHLD"
      connection={sel.U1.pin6}
    />

    <netlabel
      schX={2.11592995735476}
      schY={-0.25}
      anchorSide="top"
      net="GND"
      connection={sel.R7.pin1}
    />
    <netlabel
      schX={3.5}
      schY={0.1}
      anchorSide="top"
      net="GND"
      connection={sel.C10.pin1}
    />
    <netlabel
      schX={2.8230529183269164}
      schY={-0.25}
      anchorSide="top"
      net="GND"
      connection={sel.R8.pin1}
    />
  </board>
)
