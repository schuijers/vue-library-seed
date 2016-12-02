const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  resolve: {
    extensions: [
      '.vue',
      '.js',
      '.ts'
    ],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'awesome-typescript-loader',
            css: ExtractTextPlugin.extract({
              fallbackLoader: 'vue-style-loader',
              loader: 'css-loader?sourceMap'
            })
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'vue-style-loader',
          loader: 'css-loader?sourceMap&importLoaders=1!postcss-loader'
        })
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    sourceMapFilename: '[file].map'
  }
};
