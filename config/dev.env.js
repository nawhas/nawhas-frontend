var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_CLIENT_ID: prodEnv.DEV_API_CLIENT_ID,
  APP_DOMAIN: '"http://localhost:8080"',
});
