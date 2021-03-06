const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
const RemovePlugin = require("remove-files-webpack-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new RemovePlugin({
        watch: {
          include: ["./node_modules/de-zurich-z21b-ui-library/dist/components"],
        },
      }),
    ],
  },
};
