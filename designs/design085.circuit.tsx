import { sel } from "@tscircuit/core"
export default () => (
  <board width="10mm" height="10mm" routingDisabled>
    <diode name="D5" />
    <diode name="D6" schY={1.6} />
    <netlabel
      net="VSYS"
      anchorSide="bottom"
      schX={1.8}
      schY={1.8}
      connectsTo={sel.D6.pin2}
    />
    <netlabel
      net="VBUS"
      anchorSide="bottom"
      schX={-1.2}
      schY={1.8}
      connectsTo={[sel.D6.pin1, sel.D5.pin1]}
    />
    <netlabel
      net="VCC_5V0"
      anchorSide="bottom"
      schX={2.6}
      schY={0.2}
      connectsTo={sel.D5.pin2}
    />
  </board>
)
