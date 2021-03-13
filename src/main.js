import Vue from "vue";
import bootstrap from "./bootstrap";
import moment from "moment";
import App from "./App.vue";

window.rootUrl = process.env.MIX_APP_URL;

Vue.config.productionTip = false;
Vue.prototype.moment = moment;

//init routes
const router = bootstrap.initRouter();

//Misc
bootstrap.initToast();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
