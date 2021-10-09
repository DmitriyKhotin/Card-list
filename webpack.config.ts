import webpack = require('webpack');
import webpackDevServer = require('webpack-dev-server');
import path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const target = path.resolve(__dirname, 'target');
const src = path.resolve(__dirname, 'src');
const Entries = path.resolve(src, 'Entries');

const devMode: boolean = process.env.MODE === 'development';

console.log(path.join(src, 'index.tsx'))
console.log(target)
console.log(devMode)

type WebpackConfig = webpack.Configuration & {
  devServer: webpackDevServer.Configuration
}

const config: WebpackConfig = {
  mode: devMode ? 'development' : 'production',
  entry: ['@babel/polyfill', path.join(Entries, 'index.tsx')],
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
      template: path.join(Entries, 'index.html'),
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
    new CssMinimizerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', "@babel/preset-react"],
            // plugins: ['@babel/plugin-proposal-object-rest-spread'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              importLoaders: 2,
              modules: {
                localIdentName: devMode
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
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