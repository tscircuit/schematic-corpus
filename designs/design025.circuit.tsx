import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schWidth={1}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "top-to-bottom",
        },
      }}
    />
    <netlabel
      schX="1.1"
      schY="0.2"
      anchorSide="left"
      net="CIPO"
      connection={sel.U1.pin1}
    />
    <netlabel
      schX="1.1"
      schY="0.0"
      anchorSide="left"
      net="SCK"
      connection={sel.U1.pin2}
    />
    <netlabel
      schX="1.1"
      schY="-0.2"
      anchorSide="left"
      net="N_RESET"
      connection={sel.U1.pin3}
    />
  </board>
)
