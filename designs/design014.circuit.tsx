import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "TP1",
      center: {
        x: 1.6884194292079346,
        y: 3.1098681436572644,
      },
      relative_to: "group_center",
    },
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
        x: 2.0266955260283344,
        y: 0.757773596976772,
      },
      relative_to: "group_center",
    },
    {
      selector: "C6",
      center: {
        x: 3.5,
        y: 1.164285077054331,
      },
      relative_to: "group_center",
    },
    {
      selector: "C5",
      center: {
        x: 4.4,
        y: 1.164285077054331,
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
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          direction: "top-to-bottom",
        },
      }}
      connections={{ pin1: sel.TP1.pin1 }}
    />
    <resistor name="R7" resistance="100k" schRotation={90} />
    <capacitor
      name="C5"
      capacitance="2.2uF"
      schRotation={90}
      connections={{ pin2: sel.U1.pin7 }}
    />
    <capacitor
      name="C6"
      capacitance="2.2uF"
      schRotation={90}
      connections={{ pin2: sel.U1.pin8 }}
    />
    <testpoint name="TP1" />
    <netlabel
      schX={0.98}
      schY={3.5}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={[
        sel.U1.pin2,
        sel.U1.pin3,
        sel.U1.pin4,
        sel.U1.pin5,
        sel.U1.pin6,
      ]}
    />
    <netlabel
      schX={1.4}
      schY={1.52}
      anchorSide="left"
      net="RESET"
      connectsTo={sel.U1.pin9}
    />
    <netlabel
      schX={2.3}
      schY={1.32}
      anchorSide="left"
      net="BOOT0"
      connectsTo={[sel.U1.pin10, sel.R7.pin2]}
    />

    <netlabel
      schX={1.4}
      schY={0.3}
      anchorSide="left"
      net="A0"
      connectsTo={sel.U1.pin15}
    />
    <netlabel
      schX={1.4}
      schY={0.1}
      anchorSide="left"
      net="A1"
      connectsTo={sel.U1.pin16}
    />
    <netlabel
      schX={2.0266955260283344}
      schY={-0.25}
      anchorSide="top"
      net="GND"
      connectsTo={sel.R7.pin1}
    />
    <netlabel
      schX={3.5}
      schY={0.1}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C6.pin1}
    />
    <netlabel
      schX={4.4}
      schY={0.1}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C5.pin1}
    />
  </board>
)
