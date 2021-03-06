/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge({
  devtool: 'cheap-module-eval-source-map',
  devServer: { inline: true },
}, config);
