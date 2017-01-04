module.exports = {
  entry: ['./src/app.ts'],
  output: {
    path: __dirname,
    filename: './dist/build.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
