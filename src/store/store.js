// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      // ทำการล็อกอินผู้ใช้และเรียกใช้ mutation setUser เพื่อเก็บข้อมูลผู้ใช้
      commit('setUser', user);
    },
  },
});
