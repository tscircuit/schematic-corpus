import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <testpoint name="TP1" schX={0} schY={0.5} schRotation={180} />
    <testpoint name="TP2" schX={0} schY={0} schRotation={180} />
    <testpoint name="TP3" schX={0} schY={-0.5} schRotation={180} />
    <netlabel
      schX={0.8}
      schY={0.9}
      net="VCC"
      anchorSide="bottom"
      connection={sel.TP1.pin1}
    />
    <netlabel
      schX={0.8}
      schY={0}
      net="COPI"
      anchorSide="left"
      connection={sel.TP2.pin1}
    />
    <netlabel
      schX={0.8}
      schY={-0.9}
      net="GND"
      anchorSide="top"
      connection={sel.TP3.pin1}
    />
  </board>
)
