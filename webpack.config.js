
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const VueLoaderPlugin = require("vue-loader");
const CompresssionPlugin = require("compression-webpack-plugin");

/**
 * Options to clean dist folder
 */
const pathsToClean = [
  'dist'
];
const cleanOptions = {
  root: path.resolve(__dirname),
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
  entry: {
    script: './src/js/script.js'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].tutorial.js',
      publicPath: '/dist/',
      chunkFilename:'[name].tutorial.js'
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: { // Configuration for webpack-dev-server
    compress: true,
    port: 8088,
    hot: true,
  },
  resolve:{
    extensions:['.js', '.vue'],
    alias:{
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // 找到rules, 新增以下程式
      {
        test: /\.s(c|a)ss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                    fiber: require('fibers'),
                    indentedSyntax: true // optional
                }
            }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          },
          'img-loader' // optional image compression remove this if img-loader binary build fails in your OS
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', "css-loader"]
      },
      {
          test:/\.vue$/,
          loader: 'vue-loader',
          options:{
            loaders:{}
          }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }      
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'dist'),     
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),    
    new HtmlWebpackPlugin({
	    //hash: true,
      title: 'tutorial',
      template: path.resolve(__dirname) + '/src/index.html',
      filename: path.resolve(__dirname) + '/index.html'
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.HotModuleReplacementPlugin(),
    //new VueLoaderPlugin(),
    new CompresssionPlugin(),
  ],
}
