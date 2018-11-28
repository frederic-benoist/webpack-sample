/**
 * 2007-2018 Frédéric BENOIST
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    Frédéric BENOIST <http://www.fbenoist.com/>
 * @copyright 2013-2018 Frédéric BENOIST <contact@fbenoist.com>
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

const webpack = require('webpack');
var browserslist = require('browserslist');
const dev = process.argv.indexOf('--env=dev') !== -1; // In production mode ?
const path = require('path');

let plugins = [];

let js_config = {
  entry: [
    './js/theme.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../assets/js'),
    filename: 'theme.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  externals: {
    prestashop: 'prestashop'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js']
  }
};

js_config.plugins = js_config.plugins||[];
if (dev) {
  js_config.devtool = 'source-map';
  js_config.cache = true;
} else {
  js_config.cache = false;
  js_config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        sequences: true,
        conditionals: true,
        booleans: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      output: {
        comments: false
      },
      minimize: true
    })
  );
}

module.exports = js_config;
