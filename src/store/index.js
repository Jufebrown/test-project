import Vue from "vue";
import Vuex from "vuex";
import AutoComplete from './modules/AutoComplete.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    AutoComplete,
  },
});
