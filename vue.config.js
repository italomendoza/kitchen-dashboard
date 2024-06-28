const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/kitchen': {
        target: 'http://kitchen-service-1596486039.us-east-2.elb.amazonaws.com',
        changeOrigin: true,
      },
      '/api/ingredients': {
        target: 'http://warehouse-service-540869301.us-east-2.elb.amazonaws.com',
        changeOrigin: true,
      },
    },
  },
});
