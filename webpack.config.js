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
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  }
}
