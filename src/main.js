import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import {sync} from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = axios;
Vue.use(Vuetify);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
