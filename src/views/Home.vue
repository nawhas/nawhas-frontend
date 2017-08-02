<template>
  <v-app>
    <v-navigation-drawer permanent clipped light>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="white">
      <v-toolbar-title>Nawhas.com</v-toolbar-title>
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
      drawer: null,
      items: [
        {title: 'Home'},
        {title: 'About'}
      ],
      right: null
    };
  }
};
</script>

<style>

</style>
