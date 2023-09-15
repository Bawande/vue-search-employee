const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/_global.scss";`,
      },
    },
  },
  transpileDependencies: true,
});
