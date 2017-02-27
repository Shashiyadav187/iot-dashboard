//from isomorphic500 <https://github.com/gpbl/isomorphic500/blob/master/webpack/server.js>

import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config from './dev.config'
const host = process.env.HOST || '0.0.0.0'
const port = (process.env.PORT + 1) || 3001

const options = {
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}

module.exports = function() {
  const compiler = webpack(config);
  const webpackDevServer = new WebpackDevServer(compiler, options)
  
  return webpackDevServer.listen(port, host, function() {
    console.log('Webpack development server listening on %s:%s', host, port)
  })
}