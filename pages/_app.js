import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { FeatureToggle } from "../src/components/FeatureToggle/FeatureToggle";
import { FeatureToggleService } from "../src/services/FeatureToggleService";
import PropTypes from "prop-types";
// Some global styles but then afterward css module pattern instead
import "../src/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [enabledFeatures, setEnabledFeatures] = useState([]);
  const queryClient = new QueryClient();
  const processFeatures = async () => {
    const features = await FeatureToggleService();
    setEnabledFeatures(features);
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <FeatureToggle enabledFeatures={enabledFeatures}>
          <Component {...pageProps} />
        </FeatureToggle>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape(),
};
