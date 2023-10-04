import fetch from "node-fetch";
import { router } from "next/router";
// createPost
export const createPost = async (data) => {
  try {
    const res = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const post = await res.json();
    router.push("/");
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

// getPosts
export const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const posts = await res.json();
    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

// getPost
export const getPost = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await res.json();
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

// updatePost
export const updatePost = async (id, data) => {
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const post = await res.json();
    router.push("/");
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

// deletePost
export const deletePost = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    const post = await res.json();
    router.push("/");
    return post;
  } catch (error) {
    throw new Error(error);
  }
};
