export default () => (
  <board width="10mm" height="10mm" routingDisabled={true}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 3],
          direction: "top-to-bottom",
        },
      }}
      schX={0.2}
    />
    <netlabel
      net="V3_3_EN"
      connectsTo={["U1.pin3", "R9.pin1"]}
      anchorSide="left"
      schX={1.7}
      schY={-0.1}
    />
    <resistor
      name="R9"
      resistance="100k"
      schX={1.5}
      schY={0.9}
      schRotation={90}
    />
    <netlabel net="V5" connection="R9.pin2" schX={1.5} schY={1.7} />
    <capacitor
      name="C9"
      capacitance="1.0uf"
      schX={3.3}
      schY={-0.6}
      schRotation={90}
    />
    <netlabel
      net="GND"
      connection="C9.pin1"
      anchorSide="top"
      schX={3.3}
      schY={-1.5}
    />
    <netlabel
      net="V5"
      connectsTo={["C9.pin2", "U1.pin1"]}
      schX={3.3}
      schY={0.3}
    />
  </board>
)
