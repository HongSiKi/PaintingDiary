const prod = process.env.NODE_ENV === 'production';

require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset',
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 33000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: process.env.PROXY_BACKEND_URL,
        changeOrigin: true,
        withCredentials: true,
      },
    },
  },
};
