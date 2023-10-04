import React from "react";
import { createPost } from "../../services/BlogService";

const PostForm = () => {
  const date = new Date().toDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const data = {
      title: formJson.postTitle,
      author: formJson.postAuthor,
      content: formJson.postContent,
      date: formJson.postDate,
    };
    createPost(data);
  };
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="field">
        <label htmlFor="title">
          Post Title: <input name="postTitle" />
        </label>
      </div>
      <div className="field">
        <label htmlFor="date">
          Post Date: <input name="postDate" defaultValue={date} />
        </label>
      </div>
      <div className="field">
        <label htmlFor="author">
          Post Author: <input name="postAuthor" />
        </label>
      </div>
      <div className="label">
        <label htmlFor="content">
          Post Content: <textarea name="postContent"></textarea>
        </label>
      </div>
      <div className="field">
        <button type="submit" className="ui button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;
