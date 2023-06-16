const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pluginOptions: {
    "style-resources-loader": {
        preProcessor: "less",
        patterns: [],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
      })
  ],

  }



})
