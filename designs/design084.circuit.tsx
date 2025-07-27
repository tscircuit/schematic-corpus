import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm" routingDisabled>
    <jumper name="JP4" pinCount={2} connections={{ pin2: sel.TP8.pin1 }} />
    <testpoint name="TP8" schRotation={-90} schX={1} schY={-0.4} />
    <netlabel
      net="VIN_LEDS"
      anchorSide="bottom"
      schX={0.8}
      schY={0.5}
      connectsTo={sel.JP4.pin1}
    />
    <netlabel
      net="LED_SCK"
      anchorSide="left"
      schX={1.25}
      schY={0.1}
      connectsTo={sel.JP4.pin2}
    />
  </board>
)
