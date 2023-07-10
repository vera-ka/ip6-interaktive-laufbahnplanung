const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      // target: 'http://86.119.36.46:1337',
      changeOrigin: true,
      pathRewrite: {
        '^/\\api': ''
      }
    })
  )
}
