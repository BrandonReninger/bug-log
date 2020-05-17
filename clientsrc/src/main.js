import Vue from "vue";
import VueFilterDateFormat from 'vue-filter-date-format';
Vue.use(VueFilterDateFormat);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Auth0Plugin,
  onAuth
} from "@bcwdev/auth0-vue";
import {
  domain,
  clientId,
  audience
} from "./authConfig";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl ?
      appState.targetUrl :
      window.location.pathname
    );
  }
});

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");