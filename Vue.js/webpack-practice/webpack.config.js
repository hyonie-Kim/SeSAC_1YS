// node.js에서 경로를 설정할 수 있도록 하는 node.js 코어 기능
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
