import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
      }}
      connections={{
        pin1: sel.TP1.pin1,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin2"
      schX={0.8}
      schY={-0.3}
      connectsTo="U1.pin2"
    />
    <testpoint name="TP1" schX={1} schY={0.5} schRotation={90} />

    <netlabel
      net="LED_MOSI"
      anchorSide="left"
      connection="U1.pin1"
      schX={1.3}
      schY={0.1}
    />
  </board>
)
