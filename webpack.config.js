const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//yarn --registry https://registry.npmjs.org
module.exports = {
      entry: './client/index.js',
      output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
      ],
      resolve: {
        modules: [__dirname, 'client', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      },
       module: {
         rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test:/\.s?css$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            }
         ]
       },
       devServer: {
         historyApiFallback: true,
         port: 9000
       },
       node: {
         fs: "empty"
      }
    };