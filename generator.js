const package = require('./package.js')

module.exports = (api, opts, rootOptions) => {
  // opts是prompts.js用户选择的数据

  api.render('./template', opts)

  api.extendPackage({
    ...package,

    name: opts.name,
    description: opts.description,
    author: opts.author
  })

  if (opts.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: '^3.6.2',
      },
    })
  }
}
