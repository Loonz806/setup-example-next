import React from "react";
import Head from "next/head";
import ExampleComponent from "../src/components/ExampleComponent/ExampleComponent";
import PostsLists from "../src/components/PostsList/PostsList";
import Layout from "../src/components/Layout/Layout";
import { getPosts } from "../src/services/BlogService";
import { useFeatureToggle } from "../src/hooks/useFeatureToggle";

const HomePage = ({ posts }) => {
  const env = process.env.NODE_ENV;
  const [isEnabled] = useFeatureToggle();
  return (
    <>
      <Head>
        <title>Setup Example Next | Lenny Peters</title>
      </Head>
      <Layout>
        <h1>Hello World</h1>
        <ExampleComponent />
        {isEnabled("feature1") && (
          <h2>Feature 1 is enabled, Happy Halloween 🎃</h2>
        )}
        {env === "development" && <PostsLists posts={posts} />}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await getPosts();
  const posts = res;
  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
