# ts-react

a typeScript + react + webpack project

## infomtion

### dev

`npm run dev`

### build

`npm run build`

## webpack

### 配置说明

#### webpack.common.js

仅说明`module`和`plugins`中的选项

#### module rules

    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader',
        {
          loader: 'sass-resources-loader', //此处为了公共的sass样式能够全局加载，而不用每个组件都单独引用。
          options: {
            resources: projectRootUrl + '/src/assets/scss/style.scss'
          }
        }
      ]
    }

#### plugins

`CleanWebpackPlugin`清理文件夹

`HtmlWebpackPlugin`热更新

`ProvidePlugin`...

`OccurrenceOrderPlugin`模块排序，可减少文件大小

### `package.json`中配置项说明

`--no-inline`vs`--inline`// 默认开启inline模式，可以通过`--no-inline`关闭默认

`--devtool eval-source-map`// 调试模块使用

`--hot`// 热加载  ps: 据说配置这个后，仍然需要在`plugins`中配置`webpack.HotModuleReplacementPlugin`

`--colors`// 表示给显示出来的进度加点颜色

`--content-base`// 表示设置目录

`--quiet`// 控制台中不输出打包的信息

`--compress`// 开启gzip压缩

`--progress`// 显示打包的进度
