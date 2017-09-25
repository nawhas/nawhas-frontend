import client from '@/services/client';

const state = {
  collection: [],
  current: null,
};

const mutations = {
  FETCH_RECITERS(state, payload) {
    state.collection = payload.collection;
  },
  FETCH_RECITER(state, payload) {
    state.current = payload.reciter;
  },
};

const actions = {
  fetchReciters({commit}) {
    return new Promise((resolve, reject) => {
      client.get('/v1/reciters').then((response) => {
        commit('FETCH_RECITERS', {
          collection: response.data.data
        });

        resolve();
      }).catch(reject);
    });
  },
  fetchReciter({commit}, {id}) {
    return new Promise((resolve, reject) => {
      client.get(`/v1/reciters/${id}`).then((response) => {
        commit('FETCH_RECITER', {
          reciter: response.data
        });

        resolve();
      }).catch(reject);
    });
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
