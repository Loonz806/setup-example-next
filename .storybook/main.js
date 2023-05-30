module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-swc",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    const path = require("path");

    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../src"),
    });
    return config;
  },
};
