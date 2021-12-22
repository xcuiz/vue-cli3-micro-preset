module.exports = pkg => {
  return [{
    type: 'input',
    name: 'name',
    required: true,
    message: 'Project name',
    default: 'vue-test'
  }, {
    type: 'input',
    name: 'description',
    required: false,
    message: 'Project description',
    default: 'A Vue.js project'
  }, {
    type: 'input',
    name: 'author',
    message: 'Author'
  }, {
    name: 'appType',
    type: 'list',
    message: 'Main application or sub application',
    default: 'main',
    choices: [
      {
        name: 'main',
        value: 'main',
        short: 'main',
      },
      {
        name: 'sub',
        value: 'sub',
        short: 'sub',
      },
    ]
  }, {
    name: 'remoteName',
    when: answers => answers.appType === 'main',
    type: 'input',
    message: 'remote project name',
    default: 'sub'
  }, {
    name: 'vuex',
    type: 'confirm',
    message: 'Install vuex?',
  }]
}
