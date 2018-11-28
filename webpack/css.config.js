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


// const sass_loader = require('./loader/sass.loader.js');


if (dev) {
  var css_options = {sourceMap: true, minimize: false};
} else {
  var css_options = {sourceMap: false, minimize: true};
}

const ExtractTextPlugin = require('extract-text-webpack-plugin');
let plugins = [];
plugins.push(
  new ExtractTextPlugin('../css/theme.css')
);

let css_config = {
  // CSS Processing
  cache: true,
  entry: [
   './css/normalize.css',
   './css/example.less',
   './css/st/dev.styl',
   './css/theme.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../../assets/css'),
    filename: 'theme.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // Style Loader processes inlines <style></style> in the DOM.
          fallback: 'style-loader',
          use: [
            {
              // CSS Loader resolves import at-rules and url functions in the CSS.
              loader: 'css-loader', options: css_options
            },
            {
              // PostCSS Loader processes CSS
              loader: 'postcss-loader', options: css_options
            },
            {
              // SASS Loader compiles Sass to CSS
              loader: 'sass-loader', options: css_options
            }
            // Note that the loaders are ordered from bottom to top or right to left.
            // Loaders act like functions, that’s why it’s from right to left.
            // For example, css-loader(postcss-loader(sass-loader(resource)))
          ]
        })
    },
    {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        // Style Loader processes inlines <style></style> in the DOM.
        fallback: 'style-loader',
        use: [
          {
            // CSS Loader resolves import at-rules and url functions in the CSS.
            loader: 'css-loader', options: css_options
          },
          {
            // PostCSS Loader processes CSS
            loader: 'postcss-loader', options: css_options
          },
          {
            // Stylus Loader compiles Stylus to CSS
            loader: 'stylus-loader', options: css_options
          }
          // Note that the loaders are ordered from bottom to top or right to left.
          // Loaders act like functions, that’s why it’s from right to left.
          // For example, css-loader(postcss-loader(stylus-loader(resource)))
        ]
      })
    },
    {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader', options: css_options
          },
          {
            loader: 'postcss-loader', options: css_options
          },
          {
            // Stylus Loader compiles less to CSS
            loader: 'less-loader', options: css_options
          }
        ]
      })
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader', options: css_options
          },
          {
            loader: 'postcss-loader', options: css_options
          },
        ]
      })
    },
    {
      test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '../css/[hash].[ext]'
          }
        }
      ]
    },
  ]},
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.css', '.less', '.styl', '.scss']
  }
};

/*
This code was seperated from the config for multiple reasons.
Other conditional things can be added very simply.
Also, the check for config.plugins is so it is not dependent on the structure above.
*/
css_config.plugins = css_config.plugins||[];
if (dev) {
  css_config.devtool = 'source-map';
  css_config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `""`
      }
  }));
} else {
  css_config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `"production"`
      }
  }));
}

module.exports = css_config;
