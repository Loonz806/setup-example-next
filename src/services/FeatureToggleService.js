export const FeatureToggleService = async () => {
  try {
    const res = await fetch("/api/features");
    const features = await res.json();
    return features;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
