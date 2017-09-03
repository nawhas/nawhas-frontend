import {
  clearAccessToken,
  getAccessToken,
  getLoginUrl,
  getParameterByName,
  getSignupUrl,
  setAccessToken
} from '../../services/auth';
import client from '../../services/client';
import router from '../../router';

const state = {
  token: getAccessToken(),
};

const mutations = {
  LOGIN(state, {token}) {
    state.token = token;
  },
  LOGOUT(state) {
    state.token = null;
  },
};

const actions = {
  redirectToLogin() {
    const url = getLoginUrl();
    window.location.replace(url);
  },
  redirectToSignup() {
    const url = getSignupUrl();
    window.location.replace(url);
  },
  login({commit}) {
    const token = getParameterByName('access_token');
    const expiration = getParameterByName('expires_in');

    setAccessToken(token, expiration);
    commit('LOGIN', {token});
    router.push('/');
  },
  logout({commit}) {
    client.post('logout').then(() => {
      clearAccessToken();
      commit('LOGOUT');
      router.push('/');
    });
  }
};

const getters = {
  authenticated(state) {
    return !!state.token;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
