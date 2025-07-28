import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm">
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
      name="R1"
      resistance="70"
      schRotation={90}
      schY={1.3}
      schX={1.3}
      connections={{ pin1: sel.U1.pin1, pin2: sel.U1.pin3 }}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={0.8}
      schY={-0.6}
      connectsTo="U1.pin4"
    />
    <netlabel
      net="SPI_MISO"
      anchorSide="left"
      connection="U1.pin2"
      schX={1.6}
      schY={0.1}
    />
    <netlabel
      net="FLASH_CS"
      anchorSide="left"
      connection="U1.pin1"
      schX={1.6}
      schY={0.3}
    />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      connection="U1.pin3"
      schX={0.8}
      schY={2.2}
    />
  </board>
)
