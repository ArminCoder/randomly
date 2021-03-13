import VueRouter from "vue-router";
import rules from "./rules";

// Views
const SignUp = () => import("@/views/SignUp");
const Login = () => import("@/views/Login");
const Homepage = () => import("@/views/Home");

export default {
  getRoutes() {
    let router = new VueRouter({
      mode: "history",
      routes: [
        {
          path: "/dashboard",
          name: "homepage",
          component: Homepage,
          beforeEnter: rules.isLoggedIn
        },
        {
          path: "/login",
          name: "login",
          component: Login,
          beforeEnter: rules.isGuest
        },
        {
          path: "/register",
          name: "register",
          component: SignUp,
          beforeEnter: rules.isGuest
        },
        {
          path: "*",
          redirect: "/login"
        }
      ]
    });
    router.beforeEach((to, from, next) => {
      next();
    });

    return router;
  }
};
