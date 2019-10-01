import Vue from "vue";
import Vuex from "vuex";
import parcelModule from '../Store/modules/parcelModule/index'
import userModule from '../Store/modules/userModule/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    parcelModule,
    userModule
  ]
});
