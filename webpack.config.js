const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
                  '@svgr/webpack',
                  'url-loader'
                ]
            },
            // {
            //     test: /\.(png|jp(e*)g|svg|gif)$/,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           name: 'client/svgs/[hash]-[name].[ext]',
            //         },
            //       },
            //     ],
            // },
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
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //     loader: 'file?name=client/svgs/[name].[ext]'
            // }
        ]
    },
    devServer: {
      historyApiFallback: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   https: true
      // }
    },
    node: {
      fs: "empty"
   }
}



const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[hash]-[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   //...
// };