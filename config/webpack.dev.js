const WebpackMerge = require("webpack-merge");
const common = require("./webpack.common.js");
const utils = require("./utils.js");

const mode = "development";

module.exports = WebpackMerge.merge(common, {
  mode: mode,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: utils.getSCSSUse(mode),
      },
    ],
  },
});
