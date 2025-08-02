export default () => (
<board schLayout={{ layoutMode: "relative" }}>
<chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1,2,3],
        },
      }}
      schX={0}
      schY={0}
      schRotation={0}
      connections={{}}
    />
<resistor name="R1" resistance="1k" schX={1.4749999999999999} schY={-0.07499999999999996} schRotation={0} connections={{}} />
<capacitor name="C1" capacitance="100nF" schX={1.1749999999999998} schY={1.075} schRotation={90} connections={{}} />
<trace from="R1.pin1" to="U1.pin1" />
<trace from="R1.pin2" to="net.VCC" />
<trace from="C1.pin1" to="U1.pin3" />
<trace from="C1.pin2" to="net.GND" />
</board>
)
