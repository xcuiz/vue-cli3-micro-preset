import Vue from "vue";
import Router from "vue-router";
<%_ if (appType === "sub") { _%>
const { getPublicPath } = require("@/publicPath");
<%_ } _%>
import routes from "./routes";

<%_ if (appType === "main") { _%>
let allRoutes = [...routes];

let remote = [];
try {
  remote = require("<%- remoteName %>/router/routes").default;

  allRoutes.push(...remote);
} catch (e) {
  console.error(e);
}
<%_ } _%>

Vue.use(Router);

const router = new Router({
  <%_ if (appType === "sub") { _%>
  base: getPublicPath(),
  <%_ } _%>
  mode: "history",
  routes: <%_ if (appType === "main") { _%>allRoutes<%_ } _%><%_ if (appType === "sub") { _%>routes<%_ } _%>,
});

export default router;
