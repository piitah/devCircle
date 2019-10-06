import Vue from "vue";
import Vuex from "vuex";
import profileModule from './modules/profileModule'
import userModule from '../Store/modules/userModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profileModule,
    userModule
  }
});
