const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/index.js',
    print: './src/js/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      title: 'ICUP',
      favicon: './src/img/icon.png'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      NODE_PATH: '/src'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
 })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
   alias: {
     Actions: path.resolve(__dirname, 'src/js/actions/'),
     Keys$: path.resolve(__dirname, 'keys.js'),
     Utils: path.resolve(__dirname, 'src/js/utils/'),
     Components: path.resolve(__dirname, 'src/js/Components/'),
     Reducers: path.resolve(__dirname, 'src/js/reduers/')
   }
 },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};
