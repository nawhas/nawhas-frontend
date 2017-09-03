<template>
  <div>
    <h3>Reciters Page</h3>
    <v-btn @click="loadReciters()">Load Reciters</v-btn>
    <v-btn @click="loadAlbums()">Load Albums</v-btn>
    <div v-for="reciter in reciters" :key="reciter.id">
      <p>{{ reciter.name }}</p>
      <p v-for="album in albums">{{ album.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reciters',
  methods: {
    loadReciters() {
      this.$store.dispatch('reciters/fetchReciters');
    },
    loadAlbums() {
      this.$store.dispatch('albums/fetchAlbums');
    }
  },
  computed: {
    reciters() {
      return this.$store.state.reciters.collection;
    },
    albums() {
      return this.$store.state.albums.collection;
    }
  }
};
</script>
