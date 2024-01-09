import React from "react";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import PostForm from "../src/components/PostForm/PostForm";

const AddPosts = () => {
  const env = process.env.NODE_ENV;
  return (
    <>
      <Head>
        <title>Add Posts | Lenny Peters</title>
      </Head>
      <Layout>
        <h1>Add Posts</h1>
        {env === "development" && <PostForm />}
      </Layout>
    </>
  );
};

export default AddPosts;
