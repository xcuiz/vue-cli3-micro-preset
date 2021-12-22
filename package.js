module.exports = {
  "name": "",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "start": "yarn serve",
    "build": "cross-env NODE_ENV=production vue-cli-service build",
    "lint": "vue-cli-service lint",
    "commit": "./node_modules/.bin/idss-git-commit",
    "verify-commit-message": "./node_modules/.bin/idss-git-verify-commit-message",
    "cross-env": "cross-env"
  },
  "dependencies": {
    "core-js": "^3.19.3",
    "vue": "^2.6.14",
    "vue-router": "^3.5.3",
    "vuex": "^3.6.2"
  },
  "devDependencies": {
    "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.1",
    "@babel/plugin-proposal-optional-chaining": "^7.12.1",
    "@idss/git-commit-cli": "^1.0.6",
    "@vue/cli-plugin-babel": "5.0.0-beta.3",
    "@vue/cli-plugin-eslint": "^3.0.5",
    "@vue/cli-service": "5.0.0-beta.3",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.0.1",
    "babel-plugin-add-module-exports": "^1.0.0",
    "cross-env": "^7.0.3",
    "cz-conventional-changelog": "^2.1.0",
    "eslint": "^5.8.0",
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-prettier": "^3.3.0",
    "eslint-plugin-vue": "^5.0.0",
    "git-version-html-webpack-plugin": "^2.0.1",
    "lint-staged": "^8.1.0",
    "node-polyfill-webpack-plugin": "^1.1.4",
    "prettier": "^2.2.1",
    "vue-template-compiler": "^2.6.10",
    "webpack-bundle-analyzer": "^3.6.1"
  },
  "gitHooks": {
    "commit-msg": "npm run verify-commit-message",
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": [
      "vue-cli-service lint",
      "git add"
    ]
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
