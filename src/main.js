import Vue from "vue";
import bootstrap from "./bootstrap";

import App from "./App.vue";

window.rootUrl = process.env.MIX_APP_URL;

Vue.config.productionTip = false;

//init routes
const router = bootstrap.initRouter();

//Misc
bootstrap.initToast();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
