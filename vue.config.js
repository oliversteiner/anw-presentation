const webpack = require('webpack')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";' + '@import "@/scss/drullo.scss";' + '@import "@/scss/dark-mode.scss";',
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      // load `moment/locale/de.js`
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de|de-ch|en/),
    ],
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    //  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //  types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  filenameHashing: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
}
