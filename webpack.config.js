module.exports = env => {
  let config;

  if (!env || env.dev) {
    config = require('./config/webpack.dev');
  } else if (env.dist) {
    config = require('./config/webpack.dist');
  } else if (env.prod) {
    config = require('./config/webpack.prod');
  }

  return config;
};
