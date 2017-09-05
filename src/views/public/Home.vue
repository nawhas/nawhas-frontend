<template>
  <div>
    <hero-banner :background="require('../../assets/imam-hussain-header.jpg')">
      <hero-quote author="Imam Jafar Sadiq (a.s.)">
        The murder of Hussain has lit a fire in the hearts of the believers which will never extinguish.
      </hero-quote>
    </hero-banner>
    <section class="page-section" id="top-reciters-section">
      <h5>Top Reciters</h5>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex md4>
            <reciter-card name="Nadeem Sarwar" albums="16" :avatar="require('../../assets/nadeem-sarwar.jpg')" />
          </v-flex>
          <v-flex md4>
            <reciter-card name="Shabbir &amp; Abbas Tejani" albums="8" :avatar="require('../../assets/shabbir-abbas-tejani.jpg')" />
          </v-flex>
          <v-flex md4>
            <reciter-card name="Mir Hasan Mir" albums="29" :avatar="require('../../assets/mir-hasan-mir.jpg')" />
          </v-flex>
          <v-flex md4>
            <reciter-card name="Nadeem Sarwar" albums="16" :avatar="require('../../assets/nadeem-sarwar.jpg')" />
          </v-flex>
          <v-flex md4>
            <reciter-card name="Shabbir &amp; Abbas Tejani" albums="8" :avatar="require('../../assets/shabbir-abbas-tejani.jpg')" />
          </v-flex>
          <v-flex md4>
            <reciter-card name="Mir Hasan Mir" albums="29" :avatar="require('../../assets/mir-hasan-mir.jpg')" />
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

export default {
  name: 'Home',
  components: {
    HeroBanner,
    HeroQuote,
    ReciterCard,
  },
};
</script>

<style lang="stylus">
.page-section {
  padding: 48px;
  .container {
    padding: 0;
  }
}
</style>
