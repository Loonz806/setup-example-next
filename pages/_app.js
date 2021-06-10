import React from "react";
import PropTypes from "prop-types";
// Some global styles but then afterward css module pattern instead
import "../src/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape(),
};
