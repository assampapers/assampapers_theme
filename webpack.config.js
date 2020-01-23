const path = require("path");

module.exports = {
  mode: "development",
  entry: "./assets/js/createBlog.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "assets/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devtool: "cheap-eval-source-map"
};
