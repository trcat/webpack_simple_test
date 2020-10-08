const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Output Management" }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: "./", // 使用相对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
};
