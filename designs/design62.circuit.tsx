export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
    />
    <netlabel
      net="GND"
      connection="U1.pin1"
      anchorSide="top"
      schX={1.05}
      schY={-0.8}
    />
    <netlabel
      net="QWIIC_PWR_CTRL"
      connectsTo={["U1.pin2", "R13.pin1"]}
      anchorSide="left"
      schX={1.7}
    />
    <netlabel
      net="VIN"
      connection="U1.pin3"
      anchorSide="bottom"
      schX={1.05}
      schY={0.8}
    />
    <resistor
      name="R13"
      resistance="100k"
      schX={1.5}
      schRotation={90}
      schY={0.9}
    />
    <netlabel
      net="V3_3"
      connection="R13.pin2"
      anchorSide="bottom"
      schX={1.5}
      schY={1.6}
    />
  </board>
)
