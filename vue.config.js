
module.exports = {
  devServer: {
    disableHostCheck: false,
    host: "0.0.0.0",
    port: '8081',
    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/api': {
        target: "http://0.0.0.0:8081/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
    }
  },
};