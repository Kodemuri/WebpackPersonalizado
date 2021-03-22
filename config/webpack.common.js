const { CleanWebpackPlugin  } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './desarrollo/index.js',
  output: 
  {
    path: path.resolve(__dirname, '../produccion'),
    filename: '[name].[contenthash].js',
    publicPath: '',
    assetModuleFilename: 'img/[name][ext]'
  },
  module: 
  {
    rules: 
    [
      {
        use: 'babel-loader',
        test: /.(js)$/,
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        type: 'asset/resource',
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      },
    ],
  },
  resolve:
  {
    extensions: ['.js','.json']
  },
  plugins: 
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin
    (
     {
      template: './desarrollo/index.pug',
     }
    )
  ]
}
