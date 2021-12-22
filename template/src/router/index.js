import Vue from "vue";
import Router from "vue-router";
<%_ if (appType === "sub") { _%>
const { getPublicPath } = require("@/publicPath");
<%_ } _%>
import routes from "./routes";
<%_ if (appType === "main") { _%>
import remotes from "./remotes";
<%_ } _%>

Vue.use(Router);

const router = new Router({
  <%_ if (appType === "sub") { _%>
  base: getPublicPath(),
  <%_ } _%>
  mode: "history",
  routes,
});

<%_ if (appType === "main") { _%>
if (remotes.length > 0) {
  router.addRoutes(remotes)
}
<%_ } _%>

export default router;
