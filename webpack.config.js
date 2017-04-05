var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/src",
  entry: './index.tsx',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.ts|\.tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: "pug-loader?pretty=true"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.pug"
    })
  ],
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
