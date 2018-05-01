// see https://webpack.js.org/guides/production/
// https://medium.com/paramsingh-66174/pugjs-primer-for-your-next-angular-4-project-409ee6696fad

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const angularWPConfig = require('./webpack.angular.js')

var config = {

// https://webpack.js.org/configuration/plugins/#plugins
  plugins: [
  ],
  resolve: {
    "extensions": [ '.ts', '.tsx', ".js", ".json", ".styl"],
    // "extensions": [".styl"],
    alias: {
    }
  },

  module: {
    rules: [
      // https://medium.com/paramsingh-66174/pugjs-primer-for-your-next-angular-4-project-409ee6696fad
      {
        "test": /\.pug$/,
        "loader": ['raw-loader', 'pug-html-loader']
      },
      // https://github.com/shama/stylus-loader
      {
        test: /\.styl$/,
        use: [
          // 'style-loader',
          // 'css-loader',
          {
            loader: 'stylus-loader',
            // options: {
            //   use: [stylus_plugin()],
            // },
          },
        ]
      }

    ]
  }

  // https://github.com/shama/stylus-loader#prefer-webpack-resolving

};

module.exports = merge(angularWPConfig, config)
