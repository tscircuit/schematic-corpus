import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          direction: "top-to-bottom",
        },
      }}
    />
    <netlabel
      schX={1.3}
      schY={1}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      schX={1.3}
      schY={0.6}
      anchorSide="left"
      net="SDIO_D3"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      schX={1.3}
      schY={0.4}
      anchorSide="left"
      net="SDIO_D2"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={1.3}
      schY={0.2}
      anchorSide="left"
      net="SDIO_D1"
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      schX={1.3}
      schY={0}
      anchorSide="left"
      net="SDIO_D0"
      connectsTo={sel.U1.pin5}
    />
    <netlabel
      schX={1.3}
      schY={-0.2}
      anchorSide="left"
      net="SDIO_CLK"
      connectsTo={sel.U1.pin6}
    />
    <netlabel
      schX={1.3}
      schY={-0.4}
      anchorSide="left"
      net="SDIO_CMD"
      connectsTo={sel.U1.pin7}
    />
    <netlabel
      schX={1.3}
      schY={-1}
      anchorSide="top"
      net="GND"
      connectsTo={[sel.U1.pin8, sel.U1.pin9]}
    />
  </board>
)
