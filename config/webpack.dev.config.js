/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge({
  devtool: 'source-map',
  devServer: { inline: true },
  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { 
        loader: "source-map-loader",
        test: /\.js$/,
      },
    ],
  },
}, config);
