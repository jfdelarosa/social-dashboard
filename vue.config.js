module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/social-dashboard/'
    : '/',
  outputDir: 'docs'
};