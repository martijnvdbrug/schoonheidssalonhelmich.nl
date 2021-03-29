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

    createPage({
      path: '/permanente-makeup/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/makeup.json')
      }
    });

    createPage({
      path: '/acne/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/acne.json')
      }
    });

    createPage({
      path: '/doctor-babor/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/doctor-babor.json')
      }
    });

    createPage({
      path: '/hsr-lifting/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/hsr.json')
      }
    });

    createPage({
      path: '/microdermabrasie/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/mdb.json')
      }
    });

    createPage({
      path: '/microneedling/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/microneedling.json')
      }
    });

    createPage({
      path: '/reversive-behandeling/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/reversive.json')
      }
    });

    createPage({
      path: '/spotreducer/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/spotreducer.json')
      }
    });

    createPage({
      path: '/verzorgende-gezichtsbehandelingen/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/verzorgende.json')
      }
    });

    createPage({
      path: '/permanente-makeup-veel-gestelde-vragen/',
      component: './src/templates/subpage.vue',
      context: {
        data: require('./src/data/subpages/faq-permanente-makeup.json')
      }
    });

  })
}