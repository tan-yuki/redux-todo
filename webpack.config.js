module.exports = {
  entry: ['./src/app.tsx'],
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
        exclude: /node_modules/,
        test: /\.tsx$/,
        loaders: ['ts-loader']
      }
    ]
  }
};
