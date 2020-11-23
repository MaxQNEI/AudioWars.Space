const path = require('path');
const webpack = require('webpack');
const { exec } = require('child_process');




/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove 'splitChunks' from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');




module.exports = {
  mode: 'development',
  plugins: [new webpack.ProgressPlugin()],

  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /\.(s[ac]ss|styl|css)$/,

      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',

        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',

        options: {
          sourceMap: true
        }
      }, {
        loader: 'stylus-loader',

        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      use: [{
        loader: 'file-loader',

        options: {
          outputPath: 'assets',
        }
      }]
    }]
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  },

  plugins: [
    // new webpack.DefinePlugin({
    //   // ...
    // }),
    new webpack.ProgressPlugin((percentage, message, ...args) => {
      // e.g. Output each progress message directly to the console:
      // console.info(percentage, message, ...args);

      (percentage >= 1) && exec('notify-send -t 2000 "Compiled!" -a "Webpack"');
    }),
  ],
}