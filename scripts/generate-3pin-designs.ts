import {
  makeCircuit,
  u1Chip,
  resistor,
  capacitor,
  trace,
} from "lib/codegen/codegen-primitives"

const circuit = makeCircuit([
  u1Chip({ pinCount: 3, connections: {} }),
  resistor({ name: "R1" }),
  capacitor({ name: "C1" }),
  trace({ from: "R1.pin1", to: "U1.pin1" }),
  trace({ from: "R1.pin2", to: "net.VCC" }),
  trace({ from: "C1.pin1", to: "U1.pin3" }),
  trace({ from: "C1.pin2", to: "net.GND" }),
])

console.log(circuit)
