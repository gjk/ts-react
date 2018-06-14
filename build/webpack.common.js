const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectRootUrl = path.resolve(__dirname, '../')

const config = {
  entry: projectRootUrl + '/src/index.tsx',
  // context: path.resolve(__dirname, ''),
  output: {
    path: projectRootUrl + "/dist/",
    filename: 'bundle.js'
  },

  // Enable sourcemaps for debuggering webpack's output.
  // 调试使用source-map
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      // 使用'awesome-typescript-loader' 编译 '.tsx' 文件
      { test: /\.tsx?$/, use: 'ts-loader' },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: projectRootUrl + '/src/assets/scss/style.scss'
            }
          }
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },

  // 按照官方文档的解释，如果我们想引用一个库，但是又不想让webpack打包，并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用，
  // 那就可以通过配置externals。这个功能主要是用在创建一个库的时候用的，但是也可以在我们项目开发中充分使用。
  // 出处放开的话，页面会报错：Reference Error: React is not defined
  // externals: {
  //   'react': 'React'
  // },
  plugins: [
    new CleanWebpackPlugin(['../dist']), // 清除dist
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true) // 模块排序，可减少文件大小
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
          priority: 10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = config;
