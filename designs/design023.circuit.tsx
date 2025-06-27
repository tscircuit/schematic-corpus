import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <netlabel
      schX={6.505}
      schY={1.6}
      net="V3_3"
      connection="R2.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R2"
      schX={6.505}
      schY={0.5}
      schRotation={90}
      connections={{
        pin1: sel.LED2.pin1,
      }}
    />
    <led
      name="LED2"
      footprint="0603"
      schRotation={270}
      schY={-0.9}
      schX={6.5}
      color="red"
      schDisplayValue="GREEN"
    />
    <netlabel
      schX={6.505}
      schY={-1.7}
      net="GND"
      anchorSide="top"
      connection={sel.LED2.pin2}
    />
  </board>
)
