import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store/store";
import Vuetify from 'vuetify';
import bootstrapVue from 'bootstrap-vue';
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/esm/components/modal/modal'
import 'bootstrap-vue/esm/directives/modal/modal'

Vue.config.productionTip = false;

Vue.use(bootstrapVue)
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
