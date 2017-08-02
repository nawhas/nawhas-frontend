const state = {
  count: 0,
};

const mutations = {
  INCREMENT(state) {
    state.count += 10;
  },
  DECREMENT(state) {
    state.count -= 10;
  },
};

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 200);
  },
};

const getters = {
  count(state) {
    return state.count;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
