import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="J1"
      schX={0}
      schY={-5}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3, 4, 5, 6, 7, 8],
        },
      }}
    />
    <netlabel
      schX={1}
      schY={-5.6}
      net="VIN"
      anchorSide="bottom"
      connection={sel.J1.pin1}
    />
    <netlabel
      schX={0.8}
      schY={-6}
      net="GND"
      anchorSide="top"
      connectsTo={[sel.J1.pin2, sel.J1.pin3]}
    />
    <netlabel
      schX={0.8}
      schY={-4.2}
      net="V5"
      anchorSide="bottom"
      connection={sel.J1.pin4}
    />
    <netlabel
      schX={1.2}
      schY={-4.2}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.J1.pin5}
    />
    <netlabel
      schX={1.8}
      schY={-4.2}
      net="VCC"
      anchorSide="bottom"
      connectsTo={sel.J1.pin7}
    />
    <netlabel
      schX={1.4}
      schY={-4.7}
      net="N_RESET"
      anchorSide="left"
      connection={sel.J1.pin6}
    />
  </board>
)
