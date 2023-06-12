import React from "react";
import { render } from "@testing-library/react";
import { FeatureToggle } from "./FeatureToggle";

describe("FeatureToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  // it should render children if the feature is enabled
  it("should render children if the feature is enabled", () => {
    const { getByText } = render(
      <FeatureToggle enabledFeatures={true}>
        <div>feature1</div>
      </FeatureToggle>
    );
    expect(getByText("feature1")).toBeInTheDocument();
  });
});
