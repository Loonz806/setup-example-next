import React from "react";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import ExampleComponent from "../src/components/ExampleComponent/ExampleComponent";
import PostsLists from "../src/components/PostsList/PostsList";
import Layout from "../src/components/Layout/Layout";
import { getPosts } from "../src/services/BlogService";
import { useFeatureToggle } from "../src/hooks/useFeatureToggle";

const HomePage = (props) => {
  const env = process.env.NODE_ENV;
  const posts = props?.dehydratedState?.queries[0]?.state?.data;

  const [isEnabled] = useFeatureToggle();
  if (!posts) {
    return <div>loading...</div>;
  }
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
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey: "posts",
      queryFn: getPosts,
    });
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export default HomePage;
