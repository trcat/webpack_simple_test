const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

function getPostCssConfig(mode) {
  const result = {
    loader: "postcss-loader",
    options: {
      sourceMap: mode === "production",
      postcssOptions: {
        config: path.resolve(__dirname, 'postcss.config.js')
      },
    },
  };

  return result;
}

exports.getSCSSUse = (mode) => {
  let result;
  if (mode === "production") {
    result = [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
        },
      },
    ];
  } else {
    result = ["style-loader", "css-loader", "sass-loader"];
  }
  result.push(getPostCssConfig(mode));
  return result;
};
