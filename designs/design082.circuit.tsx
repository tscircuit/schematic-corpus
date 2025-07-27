import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm" routingDisabled={true}>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [4, 1, 2, 3],
        },
      }}
      connections={{
        pin3: sel.C2.pin1,
        pin2: sel.C2.pin2,
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin1"
      schX={2.8}
      schY={-0.55}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      connection="U1.pin4"
      schX={0.8}
      schY={0.9}
    />
    <capacitor
      name="C2"
      capacitance="10nf"
      schX={1.6}
      schY={-0.65}
      connections={{
        pin1: sel.L2.pin2,
        pin2: sel.L1.pin2,
      }}
    />
    <inductor
      name="L2"
      inductance="4700HM"
      schX={0.8}
      schY={-1.5}
      schRotation={90}
    />
    <inductor
      name="L1"
      inductance="4700HM"
      schX={2.3}
      schY={-1.5}
      schRotation={90}
    />
    <chip
      name="JP2"
      schX={0.92}
      schY={-3.5}
      schPinArrangement={{
        topSide: {
          direction: "bottom-to-top",
          pins: [1, 2],
        },
      }}
      connections={{
        pin1: [sel.TP1.pin1, sel.L2.pin1],
        pin2: [sel.TP2.pin1, sel.L1.pin1],
      }}
    />
    <testpoint name="TP1" schY={-2.6} schRotation={180} />
    <testpoint name="TP2" schY={-2.6} schX={2.8} />
  </board>
)
