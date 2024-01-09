import { render, waitFor } from "@testing-library/react";
import Layout from "../Layout/Layout";

describe("<Layout/>", () => {
  test("it should render children", async () => {
    const { getByText } = render(
      <Layout>
        <h1>Eat Bacon</h1>
      </Layout>,
    );
    await waitFor(() => {
      expect(getByText(`Home`)).toBeInTheDocument();
      expect(getByText(`Add Posts`)).toBeInTheDocument();
      expect(getByText(`Contact`)).toBeInTheDocument();
      expect(getByText(`Eat Bacon`)).toBeInTheDocument();
    });
  });
});
