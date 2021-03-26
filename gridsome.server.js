const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.createPages(async ({ createPage, graphql }) => {

    const data = require('./src/data/subpages/makeup.json');
    createPage({
      path: '/permanente-makeup/',
      component: './src/templates/subpage.vue',
      context: {
        data
      }
    })

  })
}