import Vue from 'vue';
import Router from 'vue-router';
import PublicLayout from '@/layouts/Public';
import Home from '@/views/public/Home';
import Browse from '@/views/public/Browse';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'browse',
          name: 'Browse',
          component: Browse,
        },
      ]
    },
  ],
});
