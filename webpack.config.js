
const path =require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,"/home/cartrabbit/Documents/demopopups/public")
      },
    devtool: 'inline-source-map',
    module:{
        rules: [

        // First Rule
        {
          test: /\.js|json?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
  
        // Second Rule
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localsConvention: 'camelCase',
                sourceMap: true
              }
            }
          ]
        }
      ]},
      plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          favicon: 'public/favicon.ico'
        })
      ],
      devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
  // Webpack configuration goes here
};