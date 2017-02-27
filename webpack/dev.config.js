var path = require("path")
var webpack = require("webpack")

const host = process.env.HOST || "0.0.0.0"
const port = (process.env.PORT + 1) || 3001
const dist = path.resolve(__dirname, "../static/dist")

const config = {
  devtool: "source-map",
  entry: [
    "webpack-dev-server/client?http://" + host + ":" + port,
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, '../src/public/javascripts/app.js')
  ],
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "public/assets"),
    publicPath: "http://" + host + ":" + port + "/assets/"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader?cacheDirectory"] },
      { test: /\.scss$/, loaders: ["style", "css", "autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true"] },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: "file" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        BROWSER: JSON.stringify(true)
      }
    }),
  ] 
}

module.exports = config