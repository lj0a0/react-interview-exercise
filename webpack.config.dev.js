module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    historyApiFallback: true
  }
};
