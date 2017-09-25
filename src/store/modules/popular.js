import client from '../../services/client';

const state = {
  reciters: [],
  tracks: [],
  albums: [],
  pending: false
};

const mutations = {
  FETCH(state) {
    state.pending = true;
  },
  FETCH_ALL_SUCCESS(state, {reciters, albums, tracks}) {
    state.pending = false;
    state.reciters = reciters;
    state.albums = albums;
    state.tracks = tracks;
  },
  FETCH_RECITERS_SUCCESS(state, {reciters}) {
    state.pending = false;
    state.reciters = reciters;
  },
  FETCH_ALBUMS_SUCCESS(state, {albums}) {
    state.pending = false;
    state.albums = albums;
  },
  FETCH_TRACKS_SUCCESS(state, {tracks}) {
    state.pending = false;
    state.tracks = tracks;
  },
  FETCH_FAILURE(state) {
    state.pending = false;
  }
};

const defaultParams = {limit: 6};
const actions = {
  fetchPopular({commit}) {
    commit('FETCH');

    return new Promise((resolve, reject) => {
      Promise.all([
        client.get('/v1/popular/reciters?limit=6'),
        client.get('/v1/popular/albums?limit=6'),
        client.get('/v1/popular/tracks?limit=6'),
      ]).then((values) => {
        const [reciters, albums, tracks] = values;
        commit('FETCH_ALL_SUCCESS', {
          reciters: reciters.data.data,
          albums: albums.data.data,
          tracks: tracks.data.data,
        });
        resolve();
      }).catch(reject);
    });
  },
  fetchReciters({commit}, {limit} = defaultParams) {
    commit('FETCH');

    return new Promise((resolve, reject) => {
      client.get('/v1/popular/reciters', {limit}).then((response) => {
        commit('FETCH_RECITERS_SUCCESS', {
          reciters: response.data.data
        });
        resolve();
      }).catch(reject);
    });
  },
  fetchAlbums({commit}, {limit} = defaultParams) {
    commit('FETCH');

    return new Promise((resolve, reject) => {
      client.get('/v1/popular/albums', {limit}).then((response) => {
        commit('FETCH_ALBUMS_SUCCESS', {
          albums: response.data.data
        });
        resolve();
      }).catch(reject);
    });
  },
  fetchTracks({commit}, {limit} = defaultParams) {
    commit('FETCH');

    return new Promise((resolve, reject) => {
      client.get('/v1/popular/tracks', {limit}).then((response) => {
        commit('FETCH_TRACKS_SUCCESS', {
          tracks: response.data.data
        });
        resolve();
      }).catch(reject);
    });
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
