import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <pinheader
      name="J8"
      gender="female"
      pinCount={4}
      schFacingDirection="right"
    />
    <netlabel
      net="GND"
      connection="J8.pin4"
      schX={1}
      schY={-0.7}
      anchorSide="top"
    />
    <resistor
      name="R8"
      resistance="1k"
      schX={2}
      schY={-0.1}
      connections={{
        pin1: sel.J8.pin3,
      }}
    />
    <netlabel
      net="RXD3"
      connection="R8.pin2"
      anchorSide="left"
      schX={3}
      schY={-0.1}
    />
    <netlabel
      net="TXD3"
      connection="J8.pin2"
      anchorSide="left"
      schX={1}
      schY={0.1}
    />

    <solderjumper
      name="VSEL"
      pinCount={3}
      bridgedPins={[["1", "2"]]}
      schX={1}
      schY={0.95}
      connections={{
        pin2: sel.J8.pin1,
      }}
    />
    <netlabel
      net="V3_3"
      connection="VSEL.pin1"
      schX={0.2}
      schY={1.4}
      anchorSide="bottom"
    />
    <netlabel
      net="V5"
      connection="VSEL.pin3"
      anchorSide="bottom"
      schX={1.83}
      schY={1.4}
    />
  </board>
)
