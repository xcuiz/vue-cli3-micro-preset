const services = require("./mf.services.json")
const remotes = {}
const proxy = {}

services.forEach((service) => {
  remotes[service.name] = `${service.name}@/${service.name}/remoteEntry.js`;
  proxy[`/${service.name}`] = {
    target:
      service.proxyTarget ||
      `${service.host || "http://localhost"}:${service.port}`,
    changeOrigin: true,
  }
})

module.exports = {
  remotes,
  proxy,
}
