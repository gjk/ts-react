# ts-react
a typeScript + react + webpack project


#### infomtion

##### dev
` npm run dev `

##### build
` npm run build `


## webpack

### ` package.json ` 中配置项说明
` --no-inline ` vs ` --inline ` // 默认开启inline模式，可以通过 ` --no-inline ` 关闭默认
` --devtool eval-source-map ` // 调试模块使用
` --hot ` // 热加载  ps: 据说配置这个后，仍然需要在 ` plugins ` 中配置 ` webpack.HotModuleReplacementPlugin `
` --colors ` // 表示给显示出来的进度加点颜色
` --content-base ` // 表示设置目录
` --quiet ` // 控制台中不输出打包的信息
` --compress ` // 开启gzip压缩
` --progress ` // 显示打包的进度
