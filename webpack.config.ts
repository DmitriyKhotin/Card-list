import * as path from 'path';
import * as webpack from 'webpack';

const target = path.resolve(__dirname, 'target');
const src = path.resolve(__dirname, 'src');

const devMode = process.env.MODE === 'dev';

const config: webpack.Configuration = {
  mode: devMode ? 'development' : 'production',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: 'foo.bundle.js',
  },
  // devtool: env.production ? 'source-map' : 'eval',
  // plugins: [
  //   new TerserPlugin({
  //     terserOptions: {
  //       compress: argv.mode === 'production' // only if `--mode production` was passed
  //     }
  //   })
  // ]
};
