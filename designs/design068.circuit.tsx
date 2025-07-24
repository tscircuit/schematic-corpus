import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <capacitor
      name="C5"
      capacitance="1nf"
      schRotation={90}
      schY={-0.8}
      connections={{
        pin2: sel.R20.pin2,
      }}
    />

    <resistor
      name="R20"
      resistance="3.3k"
      schX={-1}
      connections={{
        pin2: sel.R23.pin1,
      }}
    />
    <netlabel net="DIR_IN" anchorSide="left" connection="R23.pin2" schX={3} />
    <resistor name="R23" resistance="470" schX={2} />
    <netlabel net="DIR_P" anchorSide="right" connection="R20.pin1" schX={-2} />
    <diode
      name="D7"
      schRotation={90}
      schX={1.1}
      schY={-0.83}
      connections={{
        pin2: sel.R23.pin1,
      }}
      avalanche
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["C5.pin1", "D7.pin1"]}
      schX={0.55}
      schY={-1.6}
    />
  </board>
)
