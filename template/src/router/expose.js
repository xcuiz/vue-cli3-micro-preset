<%_ if (appType === "sub") { _%>
const Child = () => import("@/views/child/index.vue");
<%_ } _%>

const exposeRouter = [
  <%_ if (appType === "sub") { _%>
  {
    path: "/child",
    name: "Child",
    component: Child,
  },
  <%_ } _%>
]

export default exposeRouter
