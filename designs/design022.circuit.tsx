import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <netlabel
      schX={6.505}
      schY={2.5}
      net="V3_3"
      connection="PWR.pin2"
      anchorSide="bottom"
    />
    <solderjumper
      name="PWR"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={6.505}
      schY={1.8}
      schRotation={90}
      layer="bottom"
      connections={{
        pin1: "R4.pin2",
      }}
    />
    <resistor
      resistance="1k"
      footprint="0603"
      name="R4"
      schX={6.505}
      schY={0.5}
      schRotation={90}
      connections={{
        pin1: "D3.pin1",
      }}
    />
    <led
      name="D3"
      footprint="0603"
      schRotation={270}
      schY={-0.9}
      schX={6.5}
      color="red"
      schDisplayValue="RED"
    />
    <netlabel
      schX={6.505}
      schY={-1.7}
      net="GND"
      anchorSide="top"
      connection="D3.pin2"
    />
  </board>
)
