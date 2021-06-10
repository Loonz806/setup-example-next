import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import ExampleComponent from "./ExampleComponent";

describe("Example Component", () => {
  test("render as expected", () => {
    act(() => {
      const { getByText } = render(<ExampleComponent />);
      // screen.debug() don't forget to import screen
      expect(getByText(`I am an example component`)).toBeInTheDocument();
    });
  });
});
