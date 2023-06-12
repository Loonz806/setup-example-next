import React, { useEffect, useState } from "react";
import { FeatureToggle } from "../src/components/FeatureToggle/FeatureToggle";
import { FeatureToggleService } from "../src/services/FeatureToggleService";
import PropTypes from "prop-types";
// Some global styles but then afterward css module pattern instead
import "../src/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [enabledFeatures, setEnabledFeatures] = useState([]);
  const processFeatures = async () => {
    const features = await FeatureToggleService();
    setEnabledFeatures(features);
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <>
      <FeatureToggle enabledFeatures={enabledFeatures}>
        <Component {...pageProps} />
      </FeatureToggle>
    </>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape(),
};
