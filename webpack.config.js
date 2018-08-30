const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: "index.js"
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["env", "react"]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,

          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 70
            }
          }
      }
    ]
  }
};