import { sel } from "tscircuit"

const manualEdits = {
  schematic_placements: [
    {
      selector: "R3",
      center: {
        x: 4.091072873958944,
        y: -0.4947091408035383,
      },
      relative_to: "group_center",
    },
    {
      selector: "C13",
      center: {
        x: 2.13878190167003,
        y: -0.9446225517200716,
      },
      relative_to: "group_center",
    },
    {
      selector: "R2",
      center: {
        x: 1.5686835770452858,
        y: 0.001416636473260624,
      },
      relative_to: "group_center",
    },
    {
      selector: "JP1",
      center: {
        x: 2.290337039782851,
        y: 0.40965921501764635,
      },
      relative_to: "group_center",
    },
    {
      selector: "M1",
      center: {
        x: 4.517121704879844,
        y: 1.3434713495306307,
      },
      relative_to: "group_center",
    },
    {
      selector: "D1",
      center: {
        x: 3.56613005073126,
        y: 0.41254217916186986,
      },
      relative_to: "group_center",
    },
  ],
}

export default () => (
  <board width="10mm" height="10mm" manualEdits={manualEdits} routingDisabled>
    <chip
      name="U1"
      schPinArrangement={{
        rightSide: {
          pins: [1, 2, 3],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        pin2: { marginBottom: 0.2 },
        pin1: { marginBottom: 0.2 },
      }}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      pinCount={2}
      bridgedPins={[["pin1", "pin2"]]}
      connections={{ pin1: sel.U1.pin1 }}
    />
    <mosfet name="M1" channelType="p" mosfetMode="enhancement" />
    <diode
      name="D1"
      schRotation={180}
      connections={{ pin2: [sel.JP1.pin2, sel<"pin2">("M1").pin2] }}
    />
    <netlabel
      schX={4.1}
      schY={1.5}
      anchorSide="bottom"
      net="V_USB"
      connectsTo={[sel.D1.pin1, sel<"pin3">("M1").pin3]}
    />
    <netlabel
      schX={4.82}
      schY={2.2}
      anchorSide="bottom"
      net="V_BATT"
      connectsTo={sel<"pin1">("M1").pin1}
    />
    <netlabel
      schX={0.8}
      schY={-0.8}
      anchorSide="top"
      net="GND"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={2.14}
      schY={-1.9}
      anchorSide="top"
      net="GND"
      connectsTo={sel.C13.pin1}
    />
    <netlabel
      schX={4.09}
      schY={-1.4}
      anchorSide="top"
      net="GND"
      connectsTo={sel.R3.pin1}
    />
    <netlabel
      schX={0.8}
      schY={0.7}
      anchorSide="bottom"
      net="EN"
      connectsTo={[sel.U1.pin2, sel.R2.pin1]}
    />
    <resistor resistance="1k" footprint="0402" name="R2" />
    <resistor
      resistance="1k"
      footprint="0402"
      name="R3"
      schRotation={90}
      connections={{ pin2: sel.D1.pin1 }}
    />
    <capacitor
      capacitance="1uF"
      name="C13"
      schRotation={90}
      connections={{ pin2: sel.R2.pin2 }}
    />
  </board>
)
