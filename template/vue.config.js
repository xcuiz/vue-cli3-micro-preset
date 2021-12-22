const GitVersionPlugin = require("git-version-html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
<%_ if (appType === "sub") { _%>
const { getPublicPath } = require("./src/publicPath");
<%_ } _%>

const isProduction = process.env.NODE_ENV === "production";

<%_ if (appType === "sub") { _%>
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

module.exports = {
  <%_ if (appType === "sub") { _%>
  publicPath: getPublicPath(),
  <%_ } _%>
  runtimeCompiler: true,
  <%_ if (appType === "sub") { _%>
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
          "./router/routes": "./src/router/routes",
          <%_ } _%>
        },
        remotes: {
          <%_ if (appType === "main") { _%>
          "<%- remoteName %>": "<%- remoteName %>@/<%- remoteName %>/remoteEntry.js",
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
    port: <%_ if (appType === "main") { _%> 9090 <%_ } _%><%_ if (appType === "sub") { _%> 9191 <%_ } _%>,
    <%_ if (appType === "main") { _%>
    proxy: {
      // 子应用代理
      '/<%- remoteName %>': {
        target: 'http://localhost:9191',
        changeOrigin: true,
      }
    }
    <%_ } _%>
  },

  // 在开发环境下，在每次保存时 lint 代码
  lintOnSave: !isProduction,

  productionSourceMap: false,
};
