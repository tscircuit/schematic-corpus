import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <netlabel
      schX={0}
      schY={0.9}
      net="VCC"
      connection={sel.C2.pin1}
      anchorSide="bottom"
    />
    <capacitor
      capacitance="100nF"
      name="C2"
      footprint="0603"
      schRotation={270}
      schY={0}
      schX={0}
    />
    <netlabel
      schX={0}
      schY={-0.9}
      net="GND"
      anchorSide="top"
      connection={sel.C2.pin2}
    />
  </board>
)
