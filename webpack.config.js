const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3047,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: ['transform-class-properties'],
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
