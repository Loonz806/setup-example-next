import { FeatureToggleService } from "./FeatureToggleService";

describe("FeatureToggleService", () => {
  global.fetch = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("should return the correct data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(["feature1"]),
    });
    const features = await FeatureToggleService();
    expect(global.fetch).toHaveBeenCalledWith("/api/features");
    expect(features).toEqual(["feature1"]);
  });
  test("should throw an error", async () => {
    global.fetch.mockRejectedValueOnce("error");
    const consoleSpy = jest.spyOn(console, "error");
    await expect(FeatureToggleService()).rejects.toThrow("error");
    expect(consoleSpy).toHaveBeenCalledWith("error");
  });
  test("if nothing returns from the service, it should return undefined", async () => {
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(),
    });
    const features = await FeatureToggleService();
    expect(global.fetch).toHaveBeenCalledWith("/api/features");
    expect(features).toEqual(undefined);
  });
});
