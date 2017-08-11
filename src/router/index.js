/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('@/layouts/Public'),
      children: [
        {
          path: '',
          name: 'Home',
          component: require('@/views/public/Home'),
        },
        {
          path: 'reciters',
          name: 'Reciters',
          component: require('@/views/public/Reciters'),
        },
        {
          path: 'topics',
          name: 'Topics',
          component: require('@/views/public/Topics'),
        },
        {
          path: 'library',
          name: 'Library',
          component: require('@/views/public/Library'),
        },
        {
          path: 'charts',
          name: 'Top Charts',
          component: require('@/views/public/TopCharts'),
        },
        {
          path: 'trending',
          name: 'Trending',
          component: require('@/views/public/Trending'),
        },
        {
          path: 'new-releases',
          name: 'New Releases',
          component: require('@/views/public/NewReleases'),
        },
        {
          path: 'upload',
          name: 'Upload',
          component: require('@/views/public/Upload'),
        },
        {
          path: 'settings',
          name: 'Settings',
          component: require('@/views/public/Settings'),
        },
      ]
    },
  ],
});
