import { expect, test } from "bun:test"
import { selectSchematicWithFewestCrossings } from "../lib/codegen/selectSchematicWithFewestCrossings"

test("rejects an empty circuit list", async () => {
  let caught: unknown
  try {
    await selectSchematicWithFewestCrossings([])
  } catch (error) {
    caught = error
  }

  expect(caught).toBeInstanceOf(Error)
  expect((caught as Error).message).toContain("at least one circuit")
})
