import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schWidth={1}
      schPinArrangement={{
        rightSide: {
          pins: [1, 2],
          direction: "top-to-bottom",
        },
      }}
    />
    <netlabel
      schX="1.3"
      schY="0.1"
      anchorSide="left"
      net="A6"
      connection={sel.U1.pin1}
    />
    <netlabel
      schX="1.3"
      schY="-0.1"
      anchorSide="left"
      net="A7"
      connection={sel.U1.pin2}
    />
  </board>
)
