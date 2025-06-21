#!/usr/bin/env bun
import { convertCircuitJsonToBpc } from "circuit-json-to-bpc"

// TODO: go through every dist/**/XXX/circuit.json file in the designs directory
// and make a dist/**/XXX/bpc.json file

// TODO create a dist/bundled-bpc-graphs.json file that exports a massive JSON object
// that maps each design name to it's bpc.json file e.g.
// { design001: { boxes: [ ... ], ... }, design002: { boxes: [ ... ], ... }, ... }
