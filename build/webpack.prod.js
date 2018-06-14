const base = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dev = merge(base, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({})
    ]
  }
});

module.exports = dev;
