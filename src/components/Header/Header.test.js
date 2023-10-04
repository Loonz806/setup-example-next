import { render, waitFor } from "@testing-library/react";
import Header from "../Header/Header";

describe("<Header/>", () => {
  test("it should render children", async () => {
    const navigationItems = [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: "Add Posts", href: "/add-posts" },
      { id: 3, name: "Contact", href: "/contact" },
    ];
    const { getByText } = render(<Header navigationItems={navigationItems} />);
    await waitFor(() => {
      expect(getByText(`Home`)).toBeInTheDocument();
      expect(getByText(`Add Posts`)).toBeInTheDocument();
      expect(getByText(`Contact`)).toBeInTheDocument();
    });
  });
});
