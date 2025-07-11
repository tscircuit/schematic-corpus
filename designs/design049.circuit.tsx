import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="U14"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "bottom-to-top",
        },
      }}
      schPinStyle={{
        pin3: {
          marginBottom: 0.2,
        },
        pin2: {
          marginBottom: 0.2,
        },
      }}
    />
    <capacitor
      name="C54"
      capacitance="1.0uf"
      schRotation={90}
      schX={2.5}
      schY={-0.15}
      connections={{
        pin2: sel.U14.pin3,
      }}
    />
    <netlabel
      net="GND"
      connection="U14.pin1"
      anchorSide="top"
      schX={1}
      schY={-0.9}
    />
    <netlabel net="ICM_PWR" connection="U14.pin2" anchorSide="left" schX={1} />
    <netlabel
      net="V3_3"
      connection="C54.pin2"
      anchorSide="bottom"
      schX={2.5}
      schY={0.6}
    />
    <netlabel
      net="GND"
      connection="C54.pin1"
      anchorSide="top"
      schX={2.5}
      schY={-0.9}
    />
  </board>
)
