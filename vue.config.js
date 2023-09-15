const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-search-employee/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/_global.scss";`,
      },
    },
  },
  transpileDependencies: true,
});
