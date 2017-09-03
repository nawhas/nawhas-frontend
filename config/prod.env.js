var path = require('path')
var merge = require('webpack-merge')

module.exports = merge({
  NODE_ENV: '"production"'
}, require(path.resolve(__dirname, '../.env.js')));
