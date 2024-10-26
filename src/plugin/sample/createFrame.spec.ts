import { expect, test } from "vitest";
import { createFrame } from "./createFrame";

test("check name", () => {
  const frame = createFrame();
  expect(frame.name).toBe("sample");
});
