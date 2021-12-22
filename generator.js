const package = require('./package.js')

module.exports = (api, opts, rootOptions) => {
  // opts是prompts.js用户选择的数据

  // const baseUrl = './template'

  const baseFileList = {
    './vue.config.js': './template/vue.config.js',
    './jsconfig.json': './template/jsconfig.json',
    './babel.config.js': './template/babel.config.js',
    './.gitignore': './template/_gitignore',
    './.eslintrc.js': './template/_eslintrc.js',
    './.editorconfig': './template/_editorconfig',

    './src/App.vue': './template/src/App.vue',
    './src/bootstrap.js': './template/src/bootstrap.js',
    './src/main.js': './template/src/main.js',

    './src/router/index.js': './template/src/router/index.js',
    './src/router/routes.js': './template/src/router/routes.js',

    './src/views/example/index.vue': './template/src/views/example/index.vue'
  }

  if (opts.appType === 'main') {
    const mainFileList = {
      './mf.utils.js': './template/mf.utils.js',
      './mf.services.json': './template/mf.services.json',

      './src/router/remotes.js': './template/src/router/remotes.js',
    }

    const fileList = {
      ...baseFileList,
      ...mainFileList
    }

    api.render(fileList, opts)
  } else if (opts.appType === 'sub') {
    const subFileList = {
      './setup-public-path.js': './template/setup-public-path.js',
      './mf.config.json': './template/mf.config.json',

      './src/publicPath.js': './template/src/publicPath.js',

      './src/router/expose.js': './template/src/router/expose.js',

      './src/views/example/index.vue': './template/src/views/example/index.vue',
      './src/views/child/index.vue': './template/src/views/child/index.vue'
    }

    const fileList = {
      ...baseFileList,
      ...subFileList
    }

    api.render(fileList, opts)
  }

  // api.render('./template', opts)

  api.extendPackage({
    ...package,

    name: opts.name,
    description: opts.description,
    author: opts.author
  })

  if (opts.vuex) {
    api.render({
      './src/store/index.js': './template/src/store/index.js'
    }, opts)

    api.extendPackage({
      dependencies: {
        vuex: '^3.6.2',
      },
    })
  }
}
