import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <switch name="SW1" schRotation={-90} />

    <netlabel
      schX={0.5}
      schY={-0.8}
      anchorSide="left"
      net="BOOT0"
      connectsTo={sel.SW1.pin2}
    />
    <netlabel
      schX={0}
      schY={0.7}
      anchorSide="bottom"
      net="V3_3"
      connectsTo={sel.SW1.pin1}
    />
  </board>
)
