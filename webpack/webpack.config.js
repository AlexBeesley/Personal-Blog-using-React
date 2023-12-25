const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
