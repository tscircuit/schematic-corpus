import { sel } from "tscircuit";
export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2],
        },
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin1"
      schX={1}
      schY={-0.5}
    />
    <capacitor
      name="C3"
      capacitance="0.1uf"
      schRotation={90}
      schX={1.8}
      schY={0.3}
      connections={{
        pin2: sel.U1.pin2,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C3.pin1"
      schX={1.8}
      schY={-0.5}
    />
    <netlabel
      net="V1_8"
      anchorSide="bottom"
      connectsTo={["C4.pin2", "C3.pin2"]}
      schX={2.8}
      schY={1}
    />
    <capacitor
      name="C4"
      capacitance="10uf"
      schRotation={90}
      schX={2.8}
      schY={0.3}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C4.pin1"
      schX={2.8}
      schY={-0.5}
    />
  </board>
);
