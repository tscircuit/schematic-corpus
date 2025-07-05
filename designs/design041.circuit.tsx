import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <resistor
      name="R1"
      resistance="1k"
      schX={0}
      schY={0}
      connections={{ pin1: sel.net<"NET1">().NET1, pin2: sel.C1.pin1 }}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      schX={1.2}
      schY={0}
      connections={{ pin1: sel.R1.pin2, pin2: sel.net<"NET2">().NET2 }}
    />
  </board>
)
