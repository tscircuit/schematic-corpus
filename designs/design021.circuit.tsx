import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <jumper name="J1" schX={0} schY={-5} footprint="pinrow8" />
    <netlabel
      schX={1}
      schY={-5.6}
      net="VIN"
      anchorSide="bottom"
      connection="J1.pin1"
    />
    <netlabel
      schX={0.8}
      schY={-6}
      net="GND"
      anchorSide="top"
      connectsTo={["J1.pin2", "J1.pin3"]}
    />
    <netlabel
      schX={0.8}
      schY={-4.2}
      net="V5"
      anchorSide="bottom"
      connection="J1.pin4"
    />
    <netlabel
      schX={1.2}
      schY={-4.2}
      net="VDD"
      anchorSide="bottom"
      connectsTo={["J1.pin5", "J1.pin7"]}
    />
    <netlabel
      schX={1.4}
      schY={-4.7}
      net="N_RESET"
      anchorSide="left"
      connection="J1.pin6"
    />
  </board>
)
