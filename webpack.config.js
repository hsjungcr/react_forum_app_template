var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
