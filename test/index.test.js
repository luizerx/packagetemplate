import assert from "node:assert/strict";
import test from "node:test";
import { example } from "../dist/index.js";

test("example returns a greeting", () => {
  assert.equal(example(), "Hello from your Node.js package");
});
