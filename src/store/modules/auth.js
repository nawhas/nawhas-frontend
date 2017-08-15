import {
  clearAccessToken,
  getAccessToken,
  getLoginUrl,
  getParameterByName,
  getSignupUrl,
  setAccessToken
} from '../../services/auth';
import router from '../../router';

const state = {
  authenticated: !!getAccessToken(),
};

const mutations = {
  LOGIN(state) {
    state.authenticated = true;
  },
  LOGOUT(state) {
    state.authenticated = false;
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
    commit('LOGIN');
    router.push('/');
  },
  logout({commit}) {
    clearAccessToken();
    commit('LOGOUT');
    router.push('/');
  }
};

const getters = {
  authenticated(state) {
    return state.authenticated;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
