module.exports = {
  module: {
    loaders: [
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-html-loader'
      }
    ]
  }
}
