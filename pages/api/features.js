import { FEATURE_1 } from "../../config";

const features = (req, res) => {
  try {
    if (res.status(200)) {
      res.json([FEATURE_1 === "true" ? "feature1" : ""]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default features;
