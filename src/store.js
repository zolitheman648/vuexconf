import Vue from 'vue';
import Vuex from 'vuex';
import counterNamespaced from './store/modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 2,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    doubleVal(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    increment(state, payLoad) {
      if (!payLoad) { payLoad = 1; }
      state.counter += payLoad;
    },
    decrement(state, payLoad) {
      if (!payLoad) { payLoad = 1; }
      state.counter -= payLoad;
    },
    setCounter(state, payLoad) {
      state.counter = payLoad;
    },
  },
  actions: {
    incLater({ commit }, payLoad) {
      setTimeout(() => {
        commit('increment', payLoad.val);
      }, payLoad.time);
    },
    subLater({ commit }, payLoad) {
      setTimeout(() => {
        commit('decrement', payLoad.val);
      }, payLoad.time);
    },
    setCounter({ commit }, payLoad) {
      commit('setCounter', payLoad);
    },
  },
  modules: {
    counterNamespaced,
  },
});
