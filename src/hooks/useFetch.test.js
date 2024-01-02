import { renderHook } from "@testing-library/react";
import useFetch from "./useFetch";

describe("useFetch", () => {
  const apiPath = "https://jsonplaceholder.typicode.com/posts";
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should return an error if no url is passed", async () => {
    const { result } = await renderHook(() => useFetch());
    expect(result.current.error).toEqual("Error occurred: missing url");
  });
  it("should return an object", async () => {
    const { result } = await renderHook(() => useFetch(apiPath));
    expect(result.current).toBeInstanceOf(Object);
  });
  it("should return an object with status, data and error", async () => {
    const { result } = await renderHook(() => useFetch(apiPath));
    expect(result.current).toHaveProperty("status");
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("error");
  });
  it("should fetch data", async () => {
    const { result } = renderHook(() => useFetch(apiPath));
    expect(result.current.status).toEqual("fetching");
    expect(result.current.error).toEqual(null);
  });
});
