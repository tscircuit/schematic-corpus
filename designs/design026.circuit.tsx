import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <testpoint name="TP4" schX={0} schY={0.5} schRotation={180} />
    <testpoint name="TP5" schX={0} schY={0} schRotation={180} />
    <testpoint name="TP6" schX={0} schY={-0.5} schRotation={180} />
    <netlabel
      schX={0.8}
      schY={0.5}
      net="CIPO"
      anchorSide="left"
      connection={sel.TP4.pin1}
    />
    <netlabel
      schX={0.8}
      schY={0}
      net="SCK"
      anchorSide="left"
      connection={sel.TP5.pin1}
    />
    <netlabel
      schX={0.8}
      schY={-0.5}
      net="N_RESET"
      anchorSide="left"
      connection={sel.TP6.pin1}
    />
  </board>
)
