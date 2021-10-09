import webpack = require('webpack')
import webpackDevServer = require('webpack-dev-server');
import path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const target = path.resolve(__dirname, 'target');
const src = path.resolve(__dirname, 'src');

const devMode: boolean = process.env.MODE === 'development';

console.log(path.join(src, 'index.ts'))
console.log(target)
console.log(devMode)

type WebpackConfig = webpack.Configuration & {
  devServer: webpackDevServer.Configuration
}

const config: WebpackConfig = {
  mode: devMode ? 'development' : 'production',
  entry: ['@babel/polyfill', path.join(src, 'index.ts')],
  output: {
    path: target,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.html'),
    }),
    new TerserWebpackPlugin({
      terserOptions: {
        compress: !devMode // only if `--mode production` was passed
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'report.html'),
      openAnalyzer: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            // plugins: ['@babel/plugin-proposal-object-rest-spread'],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  devtool: devMode ? 'inline-source-map' : false,
  devServer: {
    hot: true,
    port: 9000,
    static: {
      directory: target,
    }
  },
};

export default config;