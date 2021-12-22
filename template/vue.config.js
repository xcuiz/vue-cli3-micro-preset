const GitVersionPlugin = require("git-version-html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

<%_ if (appType === "main") { _%>
const mfServiceConfig = require("./mf.utils")
<%_ } _%>

<%_ if (appType === "sub") { _%>
const mfConfig = require("./mf.config")
const { getPublicPath } = require("./src/publicPath");

const getPages = () => {
  if (isProduction) {
    return {
      index: {
        entry: "src/main.js",
      },
      "<%- name %>": {
        entry: "./setup-public-path",
      },
    };
  } else {
    return undefined;
  }
};
<%_ } _%>

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  runtimeCompiler: true,
  <%_ if (appType === "sub") { _%>
  publicPath: getPublicPath(),
  pages: getPages(),
  <%_ } _%>

  chainWebpack: (config) => {
    config.plugins.delete("prefetch");

    config.plugin("nodePolyfill").use(NodePolyfillPlugin);
    if (isProduction) {
      config.plugin("GitVersionPlugin").use(GitVersionPlugin);
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "<%- name %>",
        filename: "remoteEntry.js",
        exposes: {
          <%_ if (appType === "sub") { _%>
          ...mfConfig.exposes
          <%_ } _%>
        },
        remotes: {
          <%_ if (appType === "main") { _%>
          ...mfServiceConfig.remotes,
          <%_ } _%>
        },
        shared: {
          ...require("./package.json").dependencies,
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },

  devServer: {
    host: "0.0.0.0",
    <%_ if (appType === "sub") { _%>
    // 子应用的时候设置端口
    port: mfConfig.port,
    <%_ } _%>
    <%_ if (appType === "main") { _%>
    proxy: {
      // 子应用代理
      ...mfServiceConfig.proxy
    }
    <%_ } _%>
  },

  // 在开发环境下，在每次保存时 lint 代码
  lintOnSave: !isProduction,

  productionSourceMap: false,
};
