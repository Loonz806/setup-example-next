import { renderHook } from "@testing-library/react";
import { useFeatureToggle } from "./useFeatureToggle";

describe("useFeatureToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // it should return a function
  it("should return a function", () => {
    const { result } = renderHook(() => useFeatureToggle());
    expect(result.current[0]).toBeInstanceOf(Function);
  });
  // it should return false if the feature is not enabled
  it("should return false if the feature is not enabled", () => {
    const { result } = renderHook(() =>
      useFeatureToggle({ enabledFeatures: ["feature1"] })
    );
    expect(result.current[0]("feature2")).toBe(false);
  });
});
