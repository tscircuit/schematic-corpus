import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R23",
      center: {
        x: 1.02717662369207,
        y: 1.1528819006437543,
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
      name="R23"
      resistance="10k"
      schRotation={90}
      connections={{ pin1: sel.U1.pin1 }}
    />
    <netlabel
      schX={1.03}
      schY={2.3}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.R23.pin2}
    />
    <netlabel
      schX={0.9}
      schY={-1}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      schX={1.58}
      schY={0.31}
      net="N_GAUGE_ALERT"
      anchorSide="left"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={1.58}
      schY={0.11}
      net="ESP32_SDA"
      anchorSide="left"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={1.58}
      schY={-0.11}
      net="ESP32_SCL"
      connectsTo={sel.U1.pin3}
      anchorSide="left"
    />
  </board>
)
