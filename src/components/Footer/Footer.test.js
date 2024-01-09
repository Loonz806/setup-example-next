import { render, waitFor } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer Component", () => {
  test("should have the copyright in the footer", async () => {
    const date = new Date().getFullYear();
    const { getByText } = render(<Footer />);

    await waitFor(() => {
      expect(
        getByText(`Welcome to Setup Example Next | 2016 - ${date}`),
      ).toBeInTheDocument();
    });
  });
});
