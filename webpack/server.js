var WebpackDevServer = require("webpack-dev-server")
var webpack = require("webpack")
var config = require("./dev.config")

const host = process.env.HOST || "0.0.0.0"
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
    console.log("Webpack development server listening on %s:%s", host, port)
  })
}