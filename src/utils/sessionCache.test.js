import store from "store";
import { getSessionCache, setDataToCache } from "./sessionCache";

describe("the getSessionCache, and the setDataToCache functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getSessionCache", () => {
    jest.mock("./sessionCache.js", () => ({
      setSessionCache: jest.fn(),
      getSessionCache: jest.fn(),
    }));
    jest.mock("store", () => ({
      get: jest.fn(),
      set: jest.fn(),
    }));
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("should return the correct data", () => {
      const data = {
        data: {
          feature1: {
            id: "feature1",
            expiry: 1000,
            value: true,
          },
        },
        nextCleanup: 1000,
      };
      const storeMock = jest
        .spyOn(store, "get")
        .mockReturnValue(JSON.stringify(data));
      const result = getSessionCache();
      expect(storeMock).toHaveBeenCalledWith("SESSION_CACHE");
      expect(result).toEqual(data);
    });
  });
});
