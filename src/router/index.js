/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
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
          component: require('@/views/public/reciters/Index'),
        },
        {
          path: 'reciters/create',
          name: 'Reciter Create',
          component: require('@/views/public/reciters/Create'),
        },
        {
          path: 'reciters/:reciter',
          name: 'Reciter Profile',
          component: require('@/views/public/reciters/Reciter'),
        },
        {
          path: 'reciters/:reciter/update',
          name: 'Reciter Update',
          component: require('@/views/public/reciters/Update'),
        },
        {
          path: 'reciters/:reciter/albums/create',
          name: 'Album Create',
          component: require('@/views/public/reciters/albums/Create'),
        },
        {
          path: 'reciters/:reciter/albums/:album/update',
          name: 'Album Update',
          component: require('@/views/public/reciters/albums/Update'),
        },
        {
          path: 'reciters/:reciter/albums/:album/tracks/create',
          name: 'Track Create',
          component: require('@/views/public/reciters/albums/tracks/Create'),
        },
        {
          path: 'reciters/:reciter/albums/:album/tracks/:track',
          name: 'Track-Page',
          component: require('@/views/public/reciters/Track'),
        },
        {
          path: 'reciters/:reciter/albums/:album/tracks/:track/update',
          name: 'Track-Update',
          component: require('@/views/public/reciters/albums/tracks/Update')
        },
        {
          path: 'reciters/:reciter/albums/:album/tracks/:track/lyrics/create',
          name: 'Lyric Create',
          component: require('@/views/public/reciters/albums/tracks/lyrics/Create'),
        },
        {
          path: 'reciters/:reciter/albums/:album/tracks/:track/lyrics/:lyric/update',
          name: 'Lyric-Update',
          component: require('@/views/public/reciters/albums/tracks/lyrics/Update')
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
    {
      path: '/auth',
      component: require('@/layouts/Splash'),
      children: [
        {
          path: 'redirect',
          name: 'Auth Redirect',
          component: require('@/views/auth/AuthRedirect')
        },
        {
          path: 'callback',
          name: 'Auth Callback',
          component: require('@/views/auth/AuthCallback')
        }
      ]
    }
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
