import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ExampleComponent from "./ExampleComponent";

describe("Example Component", () => {
  it("should render as expected", () => {
    const { getByText } = render(<ExampleComponent />);
    // screen.debug() don't forget to import screen
    expect(getByText(`I am an example component`)).toBeInTheDocument();
  });
});
