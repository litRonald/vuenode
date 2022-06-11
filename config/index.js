// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../out/index.html'), // 初始文件夹名字 ../out/test/index.html 下面的资源路径也需要跟着修改
    assetsRoot: path.resolve(__dirname, '../out'), // 打包出来的文件夹位置
    assetsSubDirectory: 'staticTest',
    assetsPublicPath: './', // css js 加载位置（初始为'/'） 一般都需要改 看需求
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true, // 是否打包成gzie 需nginx加对应配置
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8989,
    host: 'localhost',
    autoOpenBrowser: true,
    assetsSubDirectory: './static',
    assetsPublicPath: '/',
    proxyTable: { // 通过前端代理 解决跨域 node core
      // '/goods':{
      //   target:'http://localhost:3000'
      // },
      '/goods/*':{
        target:'http://localhost:3000'
      },
      '/goodsSql':{
        target:'http://localhost:3000',
        changeOrigin: true,
      },
      // '/users/*':{
      //   target:'http://localhost:3000'
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
