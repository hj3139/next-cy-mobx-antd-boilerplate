const widthPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withImages = require('next-images');

module.exports = widthPlugins([withAntdLess, withImages], {
  modifyVars: {
    '@primary-color': '#ffb524',
    '@text-color': '#333333',
    '@font-family': 'CenturyGothic, Noto Sans KR, sans-serif',
    '@link-color': '#000000',
    '@btn-shadow': 'none',
    '@wave-animation-width': '0px'
  },

  lessLoaderOptions: {},
  cssLoaderOptions: {},

  webpack(config) {
    return config;
  }
});
