import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "TP4",
      center: {
        x: 2.101031790580786,
        y: 0.9063353339146097,
      },
      relative_to: "group_center",
    },
    {
      selector: "TP3",
      center: {
        x: 1.6991457136740813,
        y: 0.9063353339146097,
      },
      relative_to: "group_center",
    },
    {
      selector: "TP2",
      center: {
        x: 1.3022446125602554,
        y: 0.9063353339146097,
      },
      relative_to: "group_center",
    },
    {
      selector: "TP1",
      center: {
        x: 0.8965171840541277,
        y: 0.9063353339146097,
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
      connections={{
        pin1: sel.TP1.pin1,
        pin2: sel.TP2.pin1,
        pin3: sel.TP3.pin1,
        pin4: sel.TP4.pin1,
      }}
    />
    <testpoint name="TP1" schRotation={90} />
    <testpoint name="TP2" schRotation={90} />
    <testpoint name="TP3" schRotation={90} />
    <testpoint name="TP4" schRotation={90} />
    <netlabel
      schX={2.101031790580786}
      schY={-1.15}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      schX={2.3}
      schY={0.45}
      net="SCL"
      connectsTo={sel.U1.pin1}
      anchorSide="left"
    />
    <netlabel
      schX={2.3}
      schY={0.155}
      net="SDA"
      anchorSide="left"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={2.3}
      schY={-0.15}
      net="QWIIC_3_3V"
      anchorSide="left"
      connectsTo={sel.U1.pin3}
    />
  </board>
)
