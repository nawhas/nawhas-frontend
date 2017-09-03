import client from '@/services/client';

const state = {
  collection: [],
  loaded: false,
  pending: false
};

const mutations = {
  FETCH(state) {
    state.pending = true;
  },
  FETCH_SUCCESS(state, payload) {
    state.pending = false;
    state.loaded = true;
    state.collection = payload.collection;
  },
  FETCH_FAILURE(state) {
    state.pending = false;
  }
};

const actions = {
  fetchReciters({commit}) {
    commit('FETCH');
    client.get('/v1/reciters').then((response) => {
      commit('FETCH_SUCCESS', {
        collection: response.data.data
      });
    });
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
