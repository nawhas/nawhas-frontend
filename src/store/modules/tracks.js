import client from '@/services/client';

const state = {
  collection: [],
  item: [],
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
  },
  FETCH_ITEM(state, payload) {
    state.pending = false;
    state.loaded = true;
    state.item = payload.item;
  }
};

const actions = {
  fetchTracks({commit}) {
    commit('FETCH');
    client.get('/v1/reciters/nadeem-sarwar/albums/2009/tracks').then((response) => {
      commit('FETCH_SUCCESS', {
        collection: response.data.data
      });
    });
  },
  fetchTrack({commit}, payload) {
    commit('FETCH');
    client.get(`reciters/${payload.reciter}/albums/${payload.album}/tracks/${payload.track}`)
      .then((response) => {
        commit('FETCH_ITEM', {
          item: response.data.data
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
