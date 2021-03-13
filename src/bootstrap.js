import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import VueToast from "vue-toast-notification";

import "vue-toast-notification/dist/theme-default.css";
// import "vue-toast-notification/dist/theme-sugar.css";

export default {
  initRouter() {
    Vue.use(VueRouter);
    return router.getRoutes();
  },
  initToast() {
    Vue.use(VueToast, {
      position: "bottom",
      duration: 3000
    });
  }
};
