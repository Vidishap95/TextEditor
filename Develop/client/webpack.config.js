const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      database: './src/js/database.js',
      editor: './src/js/editor.js',
      header: './src/js/header.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),

      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just another text editor',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#####',
        theme_color: 'blue',
        start_url: '/',
        publicPath: '/',
        icons : [
          {
            src: path.resolve('src/images/logo.png'),
            size: [],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      
    ],

    //add css loaders and babel to webpack

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            Options: {
              presents: ['@babel/present-env'],
              plugins: ['@babel//plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
        
      ],
    },
  };
};
