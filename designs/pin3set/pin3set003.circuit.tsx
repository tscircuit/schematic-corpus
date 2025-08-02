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
      connections={{}}
    />
<resistor name="R1" resistance="1k" schX={0} schY={0} schRotation={0} connections={{}} />
<capacitor name="C1" capacitance="100nF" schX={0} schY={0} schRotation={0} connections={{}} />
<trace from="R1.pin1" to="U1.pin2" />
<trace from="R1.pin2" to="net.VCC" />
<trace from="C1.pin1" to="U1.pin1" />
<trace from="C1.pin2" to="net.GND" />
</board>
)
