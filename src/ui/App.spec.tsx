import { render } from "@testing-library/preact";
import { expect, test } from "vitest";
import { App } from "./App";

test("check button text", () => {
  const { getByRole } = render(<App />);
  expect(getByRole("button", { name: "count up" })).toHaveTextContent(
    /^count up$/,
  );
});
