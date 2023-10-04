import React from "react";
import Link from "next/link";
import styles from "./PostList.module.scss";

const PostsLists = ({ posts }) => {
  const renderPosts = () => {
    try {
      return posts.map((post) => {
        const { title, author, date, content, id } = post;
        return (
          <article className={styles.saleItem} key={id}>
            <Link href={`/blog/${encodeURIComponent(post.id)}`}>
              <h3>{title}</h3>
              <small>
                {author} | {date}
              </small>
              <hr />
              <p>{content}</p>
            </Link>
          </article>
        );
      });
    } catch (e) {
      throw new Error(e, "new error");
    }
  };

  return <div className={styles.postList}>{renderPosts()}</div>;
};

export default PostsLists;
