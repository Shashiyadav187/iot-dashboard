//from isomorphic500 <https://github.com/gpbl/isomorphic500/blob/master/webpack/server.js>

import path from 'path'
import webpack from 'webpack'

const host = process.env.HOST || '0.0.0.0'
const port = (process.env.PORT + 1) || 3001

const config = {
  devtool: 'source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/app-client.js')
  ],
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname,
    publicPath: `http://${host}:${port}/assets/`
  },
  module: {
    loaders: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'] }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    }),
  ] 
}

export default config