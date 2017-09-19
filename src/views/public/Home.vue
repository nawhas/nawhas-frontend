<template>
  <div>
    <hero-banner :background="require('../../assets/imam-hussain-header.jpg')" class="mb-4">
      <hero-quote author="Imam Jafar Sadiq (a.s.)">
        The murder of Hussain has lit a fire in the hearts of the believers which will never extinguish.
      </hero-quote>
    </hero-banner>
    <section class="page-section" id="top-reciters-section">
      <h5>Top Reciters</h5>
      <v-container grid-list-lg class="pa-0" fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="reciter in reciters" :key="reciter.id">
            <reciter-card featured :name="reciter.name" albums="16" :avatar="reciter.avatar" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="page-section" id="trending-nawhas">
      <h5>Trending Nawhas</h5>
      <v-container grid-list-lg class="pa-0" fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="track in tracks" :key="track.id">
            <track-card :name="track.name"
                        :album="track.album.name"
                        :artwork="track.album.artwork"
                        :year="track.album.year"
                        :reciter="track.reciter.name"
                        :show-reciter="true" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import HeroBanner from '../../components/HeroBanner';
import HeroQuote from '../../components/HeroQuote';
import ReciterCard from '../../components/ReciterCard';
import TrackCard from '../../components/TrackCard';

export default {
  name: 'Home',
  components: {
    HeroBanner,
    HeroQuote,
    ReciterCard,
    TrackCard,
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData',
  },
  methods: {
    fetchData() {
      this.$store.dispatch('popular/fetchPopular');
    },
  },
  computed: {
    ...mapState('popular', [
      'reciters',
      'tracks',
      'albums',
    ]),
  }
};
</script>

<style lang="stylus">
</style>
