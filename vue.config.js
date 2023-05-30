const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/protfolio/',
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

// module.exports = {
//   publicPath:'/paris/'
// }