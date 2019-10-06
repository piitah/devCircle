import Vue from "vue";
import Router from "vue-router";
import LandingPage from "../src/views/LandingPage.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import("./views/login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import("./views/signup.vue")
    },
    {
      path: "/Developers",
      name: "Developers",
      component: () =>
        import("./views/Developers.vue")
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      meta: {
        requiresAuth: true
      },
      component: () =>
        import("./views/Dashboard.vue")
    },
    {
      path: "/DeveloperProfile",
      name: "DeveloperProfile",
      component: () =>
        import("./views/DeveloperProfile.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to) {
      return { x: 0, y: 0 }
    } else {
      return { x: 0, y: 0 }
    }
  }
});
