import Head from "next/head";
import Layout from "../../src/components/Layout/Layout";
import { getPosts, getPost } from "../../src/services/BlogService";

const Post = ({ post }) => {
  if (!post) {
    return <div>I got nothing..</div>;
  }
  const { title, author, date, content } = post;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h3>{title}</h3>
        <small>
          {author} | {date}
        </small>
        <hr />
        <p>{content}</p>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const id = context.params.slug;
    const res = await getPost(id);
    const post = res;
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function getStaticPaths() {
  const env = process.env.NODE_ENV;
  if (env === "development") {
    try {
      const res = await getPosts();
      const posts = res;
      const paths = posts.map((post) => ({
        params: { slug: post.id.toString() },
      }));
      return {
        paths,
        fallback: false,
      };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  return {
    paths: [],
    fallback: false,
  };
}

export default Post;
