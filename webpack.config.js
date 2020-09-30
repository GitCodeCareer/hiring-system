'use strict';
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/backend/public/js');
const APP_DIR = path.resolve(__dirname, 'src/frontend');

const config = {
  context: APP_DIR,
  entry: {
    app: path.resolve(__dirname, 'src/frontend/main.js')
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //Check for all js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['@babel/plugin-proposal-function-bind', '@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: __dirname
  },
  devtool: "eval-source-map"
};

module.exports = config;