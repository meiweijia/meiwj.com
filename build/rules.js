const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const settings = require('./settings');

module.exports = [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [{
      loader: MiniCssExtractPlugin.loader, // inject CSS to css file
      // loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run postcss actions
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[contenthash:10][ext][query]'
    },
  },
  {
    test: /\.(js)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  // {
  //   test: /\.html$/,
  //   use: [{
  //     loader: 'html-loader',
  //     options: {
  //       minimize: false,
  //       esModule: true
  //     }
  //   }]
  // },
  {
    test: /\.ejs/,
    use: [{
      loader: 'ejs-loader',
      options: {
        esModule: false
      }
    }]
  },
  {
    test: /\.(png|jpe?g|gif|webp|svg)$/,
    type: 'asset',
    generator: {
      filename: 'assets/images/[contenthash:10][ext][query]'
    },
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024
      }
    }
  },
];