var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    javascript: './main.js',
    html: './public/index.html'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: ['url?limit=8192', 'img']
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./public/css")]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new CopyWebpackPlugin([{
      from: './public/css',
      to: './css'
    }, {
      from: './public/img',
      to: './img'
    }, {
      from: './public/404.html'
    }, {
      from: 'README.md'
    }]),
    new webpack.NoErrorsPlugin()
  ]
}
