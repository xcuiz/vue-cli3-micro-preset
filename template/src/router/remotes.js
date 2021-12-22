const remotes = []

<%_ if (appType === "main") { _%>
try {
  const remote = require("<%- remoteName %>/router/routers").default;

  remotes.push(...remote);
} catch (e) {
  console.error(e);
}
<%_ } _%>

export default remotes
