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
    <section class="page-section" id="trending-nawhas">
      <h5>Trending Nawhas</h5>
      <v-container grid-list-lg class="pa-0" fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4>
            <track-card name="Chotey Hazrat"
                        album="Hamarey Hain Ya Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-31.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Zainab Bibi"
                        album="Zindabad Ya Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-35.jpg')"
                        year="2014"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Alamdar Na Aaya"
                        album="Allah Allah Min Raasil Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-34.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Chotey Hazrat"
                        album="Hamarey Hain Ya Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-31.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Zainab Bibi"
                        album="Zindabad Ya Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-35.jpg')"
                        year="2014"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Alamdar Na Aaya"
                        album="Allah Allah Min Raasil Hussain"
                        :artwork="require('../../assets/nadeem-sarwar-vol-34.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="true" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
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
};
</script>

<style lang="stylus">
</style>
