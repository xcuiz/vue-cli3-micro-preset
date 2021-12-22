const getPublicPath = () =>
  process.env.NODE_ENV === "production" ? "" : "/<%- name %>";

module.exports = {
  getPublicPath,
};
