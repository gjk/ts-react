const base = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const dev = merge(base, {
  mode: 'production',
  // Enable sourcemaps for debuggering webpack's output.
  // 调试使用source-map
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({})
    ]
  }
});

module.exports = dev;
