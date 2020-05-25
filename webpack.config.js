const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
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
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ],
            }
        ]
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