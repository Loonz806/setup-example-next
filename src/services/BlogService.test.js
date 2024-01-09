import fetch from "node-fetch";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from "./BlogService";

jest.mock("node-fetch");
jest.mock("next/router", () => ({
  router: {
    push: jest.fn(),
  },
}));
// mock console.error
jest.mock("console", () => ({
  error: jest.fn(),
}));

describe("BlogService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("getPosts", () => {
    it("should return posts", async () => {
      const posts = [
        {
          id: 1,
          title: "Post 1",
          body: "Body 1",
        },
        {
          id: 2,
          title: "Post 2",
          body: "Body 2",
        },
      ];
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(posts),
      });
      const result = await getPosts();
      expect(result).toEqual(posts);
    });
    it("should throw an error if fetch fails", async () => {
      jest.spyOn(global.console, "error").mockImplementation(() => {});
      fetch.mockRejectedValueOnce(new Error("Error"));
      await expect(getPosts()).rejects.toThrow("Error");
    });
  });

  describe("getPost", () => {
    it("should return a post", async () => {
      const post = {
        id: 1,
        title: "Post 1",
        body: "Body 1",
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(post),
      });
      const result = await getPost(1);
      expect(result).toEqual(post);
    });
    it("should throw an error if fetch fails", async () => {
      jest.spyOn(global.console, "error").mockImplementation(() => {});
      fetch.mockRejectedValueOnce(new Error("Error"));
      await expect(getPost(1)).rejects.toThrow("Error");
    });
  });
  describe("updatePost", () => {
    it("should return a post", async () => {
      const post = {
        id: 1,
        title: "Post 1",
        body: "Body 1",
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(post),
      });
      const result = await updatePost(1, post);
      expect(result).toEqual(post);
    });
    it("should throw an error if fetch fails", async () => {
      jest.spyOn(global.console, "error").mockImplementation(() => {});
      fetch.mockRejectedValueOnce(new Error("Error"));
      await expect(updatePost(1, {})).rejects.toThrow("Error");
    });
  });
  describe("deletePost", () => {
    it("should return a post", async () => {
      const post = {
        id: 1,
        title: "Post 1",
        body: "Body 1",
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(post),
      });
      const result = await deletePost(1);
      expect(result).toEqual(post);
    });
    it("should throw an error if fetch fails", async () => {
      jest.spyOn(global.console, "error").mockImplementation(() => {});
      fetch.mockRejectedValueOnce(new Error("Error"));
      await expect(deletePost(1)).rejects.toThrow("Error");
    });
  });
  describe("createPost", () => {
    it("should return a post", async () => {
      const post = {
        id: 1,
        title: "Post 1",
        body: "Body 1",
      };
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(post),
      });
      const result = await createPost(post);
      expect(result).toEqual(post);
    });
    it("should throw an error if fetch fails", async () => {
      jest.spyOn(global.console, "error").mockImplementation(() => {});
      fetch.mockRejectedValueOnce(new Error("Error"));
      await expect(createPost({})).rejects.toThrow("Error");
    });
  });
});
