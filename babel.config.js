// babel.config.js
module.exports = {
  presets: [
    [
      "next/babel",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "inline-react-svg",
  ],
};
