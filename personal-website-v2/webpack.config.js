const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/app/src');
const DIST_DIR = path.join(__dirname, '/app/dist');

module.exports = {
  entry: `./app/index.jsx`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(gif|svg|JPG|png|pdf|gif)$/, loader: "file-loader" },
      { test: /\.(eot|woff|woff2|gif|svg|ttf)([?]?.*)$/, use: ['file-loader'] }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(`app/index.html`),
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  },
};