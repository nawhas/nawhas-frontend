import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import {sync} from 'vuex-router-sync';
import VueProgressBar from 'vue-progressbar';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueProgressBar, {
  color: '#ff5a00',
  failedColor: '#c90800',
  thickness: '2px',
  transition: {
    speed: '0.3s',
    opacity: '0.6s',
    termination: 0
  },
  autoRevert: false,
  location: 'top',
  inverse: false
});

Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = axios;
Vue.use(Vuetify);

sync(store, router);

/* eslint-disable no-new */
store.dispatch('auth/fetchUser').then(() => {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
  });
});
