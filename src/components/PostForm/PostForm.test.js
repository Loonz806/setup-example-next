import React from "react";
import { render, waitFor } from "@testing-library/react";
import PostForm from "./PostForm";

describe("<PostForm/>", () => {
  jest.mock("../../services/BlogService", () => {
    return {
      createPost: jest.fn(),
    };
  });
  beforeEach(() => {
    jest.resetModules();
  });
  test("it should render a form with the correct fields", async () => {
    const { getByText } = render(<PostForm />);
    await waitFor(() => {
      expect(getByText(`Post Title:`)).toBeInTheDocument();
      expect(getByText(`Post Date:`)).toBeInTheDocument();
      expect(getByText(`Post Author:`)).toBeInTheDocument();
      expect(getByText(`Post Content:`)).toBeInTheDocument();
      expect(getByText(`Submit`)).toBeInTheDocument();
    });
  });
});
