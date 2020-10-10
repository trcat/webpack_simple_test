const WebpackMerge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = WebpackMerge.merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});
