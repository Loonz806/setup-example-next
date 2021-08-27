import Router from "next/router";
import React from "react";
import PropTypes from "prop-types";
import NProgress from "nprogress";
// Some global styles but then afterward css module pattern instead
import "../src/styles/globals.scss";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape(),
};
