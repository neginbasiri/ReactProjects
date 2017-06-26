const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname
  },
  plugins: [
    new Dotenv({
      path: __dirname + '/.env',
      safe: true
    })
  ]
};
