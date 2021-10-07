import webpack = require('webpack')
import path = require("path");

const target = path.resolve(__dirname, 'target');
const src = path.resolve(__dirname, 'src');

const devMode = process.env.MODE === 'dev';
console.log(path.join(src, 'index.ts'))
console.log(target)
console.log(devMode)
const config: webpack.Configuration = {
  mode: devMode ? 'development' : 'production',
  entry: path.join(src, 'index.ts'),
  output: {
    path: target,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: devMode ? 'eval-cheap-module-source-map' : 'none',
  // plugins: [
  //   new TerserPlugin({
  //     terserOptions: {
  //       compress: !devMode // only if `--mode production` was passed
  //     }
  //   })
  // ]
};

export default config;