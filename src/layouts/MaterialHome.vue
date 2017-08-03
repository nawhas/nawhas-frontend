<template>
  <v-app>
    <v-navigation-drawer persistent clipped v-model="drawer" overflow>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="white masthead__toolbar">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img src="../assets/nawhas-logo-wordmark-vector.svg" height="36"
             onerror="this.src='../assets/nawhas-logo-wordmark-48.png'" alt="Nawhas.com" />
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';

export default {
  name: 'Home',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: false,
      right: null
    };
  }
};
</script>

<style lang="scss" scoped>
.masthead__toolbar {
  .toolbar__title {
    display: flex;
  }
}
</style>
