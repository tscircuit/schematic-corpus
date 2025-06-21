# schematic-corpus

A corpus of schematic layouts made with [tscircuit](https://github.com/tscircuit/tscircuit).

![](./designs/__snapshots__/design001.circuit-schematic.snap.svg)

## Building / Automatic Expansion

Schematics are automatically duplicated and flipped horizontally when the corpus is converted to [BPC Graphs](https://github.com/tscircuit/bpc-graph)

We do not do combinatorial joining of right-facing jumpers with left-facing
jumpers, this should be managed by BPC graph partitioning stages (the stage
prior to matching- you can also run partitioning when there isn't a good matching)

Because we expect paritioning to be run before matching, the corpus should
only include right-facing variants of designs, and should generally avoid having
the "main chip" be two-sided.

Vertical inversion is never performed.
