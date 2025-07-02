import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="J1"
      schX={0}
      schY={-5}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin2",
            "pin3",
            "pin14",
            "pin13",
            "pin12",
            "pin11",
            "pin10",
            "pin9",
          ],
        },
      }}
      connections={{
        pin3: sel.D2.pin2,
        pin2: sel.D3.pin2,
      }}
    />
    <netlabel
      schX={0.8}
      schY={-4.9}
      net="DTR"
      anchorSide="left"
      connection={sel.J1.pin13}
    />
    <netlabel
      schX={2.5}
      schY={-4.3}
      net="RX_I"
      anchorSide="left"
      connection={sel.J1.pin2}
    />
    <netlabel
      schX={2.5}
      schY={-4.5}
      net="TX_O"
      anchorSide="left"
      connection={sel.J1.pin3}
    />
    <netlabel
      schX={1}
      schY={-1.4}
      net="VCC"
      connection="R16.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="4.7k"
      footprint="0603"
      name="R16"
      schX={1}
      schY={-2.2}
      schRotation={90}
      connections={{
        pin1: sel.D2.pin1,
      }}
    />
    <led
      name="D2"
      footprint="0603"
      schRotation={270}
      schY={-3.5}
      schX={1}
      color="red"
      schDisplayValue="GREEN"
    />
    <netlabel
      schX={2.2}
      schY={-1.4}
      net="VCC"
      connection="R12.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="4.7k"
      footprint="0603"
      name="R12"
      schX={2.2}
      schY={-2.2}
      schRotation={90}
      connections={{
        pin1: sel.D3.pin1,
      }}
    />
    <led
      name="D3"
      footprint="0603"
      schRotation={270}
      schY={-3.5}
      schX={2.2}
      color="red"
      schDisplayValue="YELLOW"
    />
  </board>
)
