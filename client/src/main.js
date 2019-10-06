import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store/store";
import Vuetify from 'vuetify';
import bootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/esm/components/modal/modal'
import 'bootstrap-vue/esm/directives/modal/modal'
import "../src/assets/styles/css/v.css"
import "../src/assets/animate.css"

// components
import Education from './components/Education'
import Profile from './components/Profile'
import Experience from '../src/components/Experience'
import EditProfile from "../src/components/EditProfile"

export const authService = () => {
  const token = window.localStorage.getItem('user_token')
  if (token) {
    return true;
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authService) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false;

Vue.component('Profile', Profile)
Vue.component('Education', Education)
Vue.component('Experience', Experience)
Vue.component('EditProfile', EditProfile)
Vue.use(bootstrapVue)
Vue.use(Vuetify)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
