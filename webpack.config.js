var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
      loaders: [
        'url?limit=8192',
        'img'
      ]
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }]
  },
  plugins: [
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
