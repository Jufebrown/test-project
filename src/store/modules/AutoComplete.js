import { createLogger } from 'vuex';

const state = {
  hintData: [],
  nameList: [],
};

const getters = {
  hintData: (state) => state.hintData,
  nameList: (state) => state.nameList,
};

const mutations = {
  updateHintData(state, data) {
    state.hintData = data;
  },
  updateNameList(state, data) {
    state.nameList = data;
  },
};

const actions = {
  async fetchHintData({ commit, dispatch }) {
    let hintUrl = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(hintUrl);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    let data = await response.json();
    console.log('data', data);
    await commit("updateHintData", data);
    await dispatch("generateNameList", data);
  },
  generateNameList({ commit }, data) {
    let nameList = data.map(item => item.name);
    console.log('nameList', nameList);
    commit("updateNameList", nameList);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
