import React from "react";
import Head from "next/head";
import ExampleComponent from "../src/components/ExampleComponent/ExampleComponent";

const HomePage = ({ posts }) => {
  console.log("POSTS", posts);
  return (
    <>
      <Head>
        <title>Setup Example Next | Lenny Peters</title>
      </Head>
      <main>
        <h1>
          {posts.filter((blog) => blog.title === "My first blog post")[0]
            .title || "No title"}
        </h1>
        <ExampleComponent />
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/posts");
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default HomePage;
