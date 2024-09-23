const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true
  },
  mode: 'none'
}