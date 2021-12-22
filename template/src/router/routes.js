const Example = () => import("@/views/example/index.vue");
<%_ if (appType === "sub") { _%>
const Child = () => import("@/views/child/index.vue");
<%_ } _%>

const routes = [
  {
    path: "/",
    name: "Example",
    component: Example,
  },
  <%_ if (appType === "sub") { _%>
  {
    path: "/child",
    name: "Child",
    component: Child,
  },
  <%_ } _%>
];

export default routes;
