const getters = {
  getCounter(state) {
    return state.counter;
  },
  doubleVal(state) {
    return state.counter * 2;
  },
};

const mutations = {
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
};

const actions = {
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
};

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  getters,
  mutations,
  actions,
};
