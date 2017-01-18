module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: __dirname,
    filename: './dist/build.js',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loaders: ['ts-loader']
      }
    ]
  }
};
