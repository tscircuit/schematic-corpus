export default () => (
  <board width="10mm" height="10mm">
    <capacitor name="C2" capacitance="10uF" polarized schRotation={-90} />
    <capacitor name="C1" capacitance="0.1uF" schRotation={90} schX={1.5} />
    <capacitor name="C4" capacitance="1uF" schRotation={90} schX={3} />

    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["C2.pin2", "C1.pin1", "C4.pin1"]}
      schX={1.5}
      schY={-1}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      connectsTo={["C2.pin1", "C1.pin2", "C4.pin2"]}
      schX={1.5}
      schY={1}
    />
  </board>
)
