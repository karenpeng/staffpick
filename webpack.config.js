module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname,
    filename: './build/build.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};