export default () => (
  <board width="10mm" height="10mm">
    <pushbutton name="B1" schX={-4} schY={2.5} />
    <netlabel
      net="RESET"
      anchorSide="right"
      connection="B1.pin1"
      schX={-5.2}
      schY={2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B1.pin2"
      schX={-3.3}
      schY={1.9}
    />

    <pushbutton name="B6" schX={0} schY={2.5} />
    <netlabel
      net="BTN_UP"
      anchorSide="right"
      connection="B6.pin1"
      schX={-1.2}
      schY={2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B6.pin2"
      schX={0.7}
      schY={1.9}
    />

    <pushbutton name="B2" schX={4} schY={2.5} />
    <netlabel
      net="BTN_LOCK"
      anchorSide="right"
      connection="B2.pin1"
      schX={2.8}
      schY={2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B2.pin2"
      schX={4.7}
      schY={1.9}
    />

    <pushbutton name="B5" schX={-4} schY={0} />
    <netlabel
      net="BTN_LEFT"
      anchorSide="right"
      connection="B5.pin1"
      schX={-5.2}
      schY={0}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B5.pin2"
      schX={-3.3}
      schY={-0.6}
    />

    <pushbutton name="B7" schX={0} schY={0} />
    <netlabel
      net="BTN_SEL"
      anchorSide="right"
      connection="B7.pin1"
      schX={-1.2}
      schY={0}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B7.pin2"
      schX={0.7}
      schY={-0.6}
    />

    <pushbutton name="B9" schX={4} schY={0} />
    <netlabel
      net="BTN_RIGHT"
      anchorSide="right"
      connection="B9.pin1"
      schX={2.8}
      schY={0}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B9.pin2"
      schX={4.7}
      schY={-0.6}
    />

    <pushbutton name="B3" schX={-4} schY={-2.5} />
    <netlabel
      net="BTN_PREV"
      anchorSide="right"
      connection="B3.pin1"
      schX={-5.2}
      schY={-2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B3.pin2"
      schX={-3.3}
      schY={-3.1}
    />

    <pushbutton name="B8" schX={0} schY={-2.5} />
    <netlabel
      net="BTN_DOWN"
      anchorSide="right"
      connection="B8.pin1"
      schX={-1.2}
      schY={-2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B8.pin2"
      schX={0.7}
      schY={-3.1}
    />

    <pushbutton name="B4" schX={4} schY={-2.5} />
    <netlabel
      net="BTN_NEXT"
      anchorSide="right"
      connection="B4.pin1"
      schX={2.8}
      schY={-2.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="B4.pin2"
      schX={4.7}
      schY={-3.1}
    />
  </board>
)
