import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<%_ if (vuex) { _%>
import store from "./store";
<%_ } _%>

Vue.config.productionTip = false;

const vue = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  <%_ if (vuex) { _%>
  store,
  <%_ } _%>
});

export default vue;
