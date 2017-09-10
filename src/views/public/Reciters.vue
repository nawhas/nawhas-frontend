<template>
  <div>
    <section class="page-section" id="top-reciters-section">
      <h5>Top Reciters</h5>
      <v-container grid-list-lg class="pa-0" fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Nadeem Sarwar" albums="16" :avatar="require('../../assets/nadeem-sarwar.jpg')" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Shabbir &amp; Abbas Tejani" albums="8" :avatar="require('../../assets/shabbir-abbas-tejani.jpg')" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Mir Hasan Mir" albums="29" :avatar="require('../../assets/mir-hasan-mir.jpg')" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Nadeem Sarwar" albums="16" :avatar="require('../../assets/nadeem-sarwar.jpg')" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Shabbir &amp; Abbas Tejani" albums="8" :avatar="require('../../assets/shabbir-abbas-tejani.jpg')" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <reciter-card featured name="Mir Hasan Mir" albums="29" :avatar="require('../../assets/mir-hasan-mir.jpg')" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="page-section" id="all-reciters-section">
      <h5>All Reciters</h5>
      <v-card>
        <v-container class="pa-0" fluid>
          <v-layout row wrap>
            <template v-for="i in 20">
              <v-flex xs12 sm6 md4 lg3>
                <reciter-card name="Nadeem Sarwar" albums="16" :avatar="require('../../assets/nadeem-sarwar.jpg')" />
              </v-flex>
              <v-flex xs12 sm6 md4 lg3>
                <reciter-card name="Shabbir &amp; Abbas Tejani" albums="8" :avatar="require('../../assets/shabbir-abbas-tejani.jpg')" />
              </v-flex>
              <v-flex xs12 sm6 md4 lg3>
                <reciter-card name="Mir Hasan Mir" albums="29" :avatar="require('../../assets/mir-hasan-mir.jpg')" />
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-card>
    </section>
  </div>
</template>

<script>
import ReciterCard from '../../components/ReciterCard';

export default {
  name: 'Reciters',
  components: {
    ReciterCard,
  },
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
