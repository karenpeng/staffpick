var hostname = 'localhost'
var port = 1111

module.exports = {
  entry: 'mocha!./tests/test.js',
  output: {
    filename: 'test.build.js',
    path: 'tests/',
    publicPath: 'http://' + hostname + ':' + port + '/tests'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      },
      {
        test: /(\.css|\.less)$/,
        loader: 'null-loader',
        exclude: [
            /build/
        ]
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null-loader'
      }
    ]
  },
  devServer: {
    host: hostname,
    port: port
  }
};