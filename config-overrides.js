const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@images': resolve('src/assets/images'),
      '@components': resolve('src/components'),
      '@containers': resolve('src/containers'),
      '@store': resolve('src/store'),
      '@hooks': resolve('src/hooks'),
      '@utils': resolve('src/utils'),
    },
  };

  return config;
};
