/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
      },
      {
        loader: 'json-loader',
        test: /\.json$/,
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, '../node_modules/foundation-sites/scss'),
    ],
  },
};
