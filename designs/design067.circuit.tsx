import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm" routingDisabled={true}>
    <chip
      name="U3"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [3, 6],
        },
      }}
      connections={{ pin3: sel.C7.pin1 }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="U3.pin6"
      schX={1}
      schY={0.5}
    />
    <capacitor
      name="C7"
      capacitance="0.1uf"
      connections={{
        pin2: sel.U3.pin6,
      }}
      schRotation={90}
      schX={1.5}
      schY={-0.45}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["C7.pin1"]}
      schX={1.5}
      schY={-1.3}
    />
  </board>
)
