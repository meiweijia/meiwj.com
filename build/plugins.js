const HtmlWebpackPlugin = require('html-webpack-plugin'); // html解析
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // css抽离

const settings = require('./settings');

const plugins = [];

settings.routers.forEach(page => {
  plugins.push(
    new HtmlWebpackPlugin({ // 多页面配置
      filename: `${page.name}.html`,  // 页面名称
      template: settings.pathTemplate(page.path),  // 页面模板
      chunks: [page.name,'common'],  // js chunks
    })
  );
});
plugins.push(
  new MiniCssExtractPlugin({
    filename: settings.filename_css,
  })
);

module.exports = plugins;