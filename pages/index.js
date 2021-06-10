import React from "react";
import Head from "next/head";
import ExampleComponent from "../src/components/ExampleComponent/ExampleComponent";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Setup Example Next | Lenny Peters</title>
      </Head>
      <h1>Hello World</h1>
      <ExampleComponent />
    </>
  );
};

export default HomePage;
