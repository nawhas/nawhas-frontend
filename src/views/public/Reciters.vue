<template>
  <div>
    <h3>Reciters Page</h3>
    <v-btn @click="loadReciters()">Load Reciters</v-btn>
    <v-btn @click="loadAlbums()">Load Albums</v-btn>
    <v-btn @click="loadTracks()">Load Tracks</v-btn>
    <div v-for="reciter in reciters" :key="reciter.id">
      <p>{{ reciter.name }}</p>
      <div v-for="album in albums" :key="album.id">
        <p>{{ album.name }}</p>
        <div v-for="track in tracks" :key="track.id">
          <p >{{ track.name }}</p>
        </div>
      </div>
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
    },
    loadTracks() {
      this.$store.dispatch('tracks/fetchTracks');
    }
  },
  computed: {
    reciters() {
      return this.$store.state.reciters.collection;
    },
    albums() {
      return this.$store.state.albums.collection;
    },
    tracks() {
      return this.$store.state.tracks.collection;
    }
  }
};
</script>
