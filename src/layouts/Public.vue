<template>
  <v-app>
    <header class="masthead">
      <div class="masthead__title">
        <img src="../assets/nawhas-logo-wordmark-vector.svg" height="38"
             onerror="this.src='../assets/nawhas-logo-wordmark-48.png'" alt="Nawhas.com">
      </div>
      <div class="masthead__search">
        <v-btn icon class="search__search-icon">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon class="search__clear-icon">
          <v-icon>clear</v-icon>
        </v-btn>
        <div class="search__box">
          <input type="text" placeholder="Search for reciters, nawhas, and more..."/>
        </div>
      </div>
      <div class="masthead__right">
        <v-btn flat>Log In</v-btn>
        <v-btn flat primary>Sign Up</v-btn>
      </div>
    </header>
    <aside class="nav-sidebar">
      <div class="nav-sidebar__list">
        <v-list>
          <v-list-tile v-for="item in items" :to="item.to" :exact="item.exact">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';

export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          action: 'home',
          title: 'Home',
          exact: true,
          to: '/',
        },
        {
          action: 'find_in_page',
          title: 'Browse',
          exact: false,
          to: '/browse',
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.masthead {
  background: white;
  padding: 10px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: min-content;
  position: fixed;
  white-space: nowrap;
  top: 0;
  left: 0;

  .masthead__title {
    display: flex;
    min-width: 260px;
    padding-right: 30px;
  }

  .masthead__search {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
    position: relative;
    transition: background 100ms ease-in, width 100ms ease-out;
    white-space: nowrap;
    flex: 1 1 auto;

    .search__search-icon {
      float: left;
    }
    .search__clear-icon {
      position: absolute;
      right: 0;
      cursor: default;
      visibility: hidden;
      top: 0;
      transition: opacity 250ms ease-out;
    }

    .search__box {
      height: 50px;
      padding: 0 11px;
      margin-right: 48px;

      input {
        border: none;
        font: normal 16px Roboto, sans-serif;
        font-variant-ligatures: none;
        height: 50px;
        outline: none;
        padding: 11px 16px 13px 0;
        width: 100%;
        background: transparent;
      }
    }
  }
}

.nav-sidebar {
  width: 260px;
  height: 100%;
  position: fixed;
  top: 64px;
  left: 0;
  padding: 0;
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
}

main {
  padding-left: 260px;
  padding-top: 72px;
}
</style>
