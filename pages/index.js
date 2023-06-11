import React from "react";
import Head from "next/head";
import ExampleComponent from "../src/components/ExampleComponent/ExampleComponent";
import { useFeatureToggle } from "../src/hooks/useFeatureToggle";

const HomePage = ({ posts }) => {
  const [isEnabled] = useFeatureToggle();
  // console.log("POSTS", posts);
  return (
    <>
      <Head>
        <title>Setup Example Next | Lenny Peters</title>
      </Head>
      <main>
        {/* <h1>
          {posts.filter((blog) => blog.title === "My first blog post")[0]
            .title || "No title"}
        </h1> */}
        <h1>Hello World</h1>
        <ExampleComponent />
        {isEnabled("feature1") && (
          <h2>Feature 1 is enabled, Happy Halloween 🎃</h2>
        )}
      </main>
    </>
  );
};

// export async function getStaticProps() {
//   try {
//     const res = await fetch("http://localhost:3000/posts");
//     const posts = await res.json();
//     return {
//       props: {
//         posts,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {},
//     };
//   }
// }

export default HomePage;
