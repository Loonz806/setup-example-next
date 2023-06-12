import { useContext } from "react";
import { FeatureToggleContext } from "../context/FeatureToggleContext";

export const useFeatureToggle = () => {
  const { enabledFeatures } = useContext(FeatureToggleContext);
  const isEnabled = (feature) => {
    return enabledFeatures.includes(feature);
  };
  return [isEnabled];
};
