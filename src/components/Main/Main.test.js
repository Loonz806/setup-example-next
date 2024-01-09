import { render, waitFor } from "@testing-library/react";
import Main from "../Main/Main";

describe("<Main/>", () => {
  test("it should render children", async () => {
    const { getByText } = render(
      <Main>
        <h1>Hello World</h1>
      </Main>,
    );
    await waitFor(() => {
      expect(getByText(`Hello World`)).toBeInTheDocument();
    });
  });
});
