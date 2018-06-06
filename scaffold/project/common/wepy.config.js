const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      'utils': path.join(__dirname, 'src/utils'),
      'mixins': path.join(__dirname, 'src/mixins'),
      'config': path.join(__dirname, 'src/config'),
      'components': path.join(__dirname, 'src/components'),
      'homeComponents': path.join(__dirname, 'src/page/home/components'),
      'mineComponents': path.join(__dirname, 'src/page/mine/components'),
      'common': path.join(__dirname, 'src/page/common')
    },
    aliasFields: ['wepy'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    /* sass: {
      outputStyle: 'compressed'
    }, */
    babel: {
      sourceMap: true,
      presets: [
        'env',
        'es2015',
        'stage-1'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        'transform-node-env-inline'
      ]
    }
  },
  plugins: {
    px2units: {
      filter: /\.wxss$/
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
// console.log(`NODE_ENV is: ${prod && 'prod' || 'dev'}`)
if (prod) {
  // 压缩less
  module.exports['less'] = {
    'compress': true
  }

  // 压缩js
  module.exports.plugins = {
    px2units: {
      filter: /\.wxss$/
    },
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
