var webpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
  test: /\.js$/,
  exclude: '/node_modules/',
  loader: webpackStrip.loader('console.log')
};
//webpackStrip.loader can eliminate any number of function which will not be use in production
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
