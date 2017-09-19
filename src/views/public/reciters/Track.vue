<template>
  <div>
    <div class="reciter-hero">
      <div class="reciter-hero__ribbon"></div>
      <div class="reciter-hero__content">
        <v-card class="reciter-hero__card">
          <div class="reciter-hero__avatar">
            <v-avatar size="152px" class="white">
              <img src="../../../assets/nadeem-sarwar.jpg" alt="Nadeem Sarwar" />
            </v-avatar>
          </div>
          <h4 class="reciter-hero__title">
            Nadeem Sarwar
          </h4>
          <ul class="reciter-hero__social">
            <li><a href=""><i class="fa fa-globe"></i></a></li>
            <li><a href=""><i class="fa fa-facebook"></i></a></li>
            <li><a href=""><i class="fa fa-youtube-play"></i></a></li>
            <li><a href=""><i class="fa fa-twitter"></i></a></li>
            <li><a href=""><i class="fa fa-instagram"></i></a></li>
          </ul>
          <p class="reciter-hero__bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tellus metus. In eget tortor ut mauris bibendum dapibus. Ut facilisis tincidunt sodales. Integer lobortis fermentum purus ac feugiat. Nunc sit amet volutpat mi. Donec enim quam, placerat nec sapien in, blandit euismod velit. Praesent ut libero a nunc dapibus pellentesque. Curabitur dapibus, nulla ac ullamcorper faucibus, nulla diam viverra eros, nec vulputate urna lectus at lacus. Nunc massa enim, molestie vel magna vel, rutrum fermentum arcu. Vivamus cursus diam massa, vitae congue tellus varius sed. Duis maximus aliquam enim eget commodo.
          </p>
        </v-card>
      </div>
    </div>
    <section class="page-section" id="top-reciters-section">
      <h5>Top Nawhas</h5>
      <v-container grid-list-lg class="pa-0" fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4>
            <track-card name="Chotey Hazrat"
                        album="Hamarey Hain Ya Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-31.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Zainab Bibi"
                        album="Zindabad Ya Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-35.jpg')"
                        year="2014"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Alamdar Na Aaya"
                        album="Allah Allah Min Raasil Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-34.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Chotey Hazrat"
                        album="Hamarey Hain Ya Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-31.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Zainab Bibi"
                        album="Zindabad Ya Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-35.jpg')"
                        year="2014"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
          <v-flex xs12 sm6 md4>
            <track-card name="Alamdar Na Aaya"
                        album="Allah Allah Min Raasil Hussain"
                        :artwork="require('../../../assets/nadeem-sarwar-vol-34.jpg')"
                        year="2011"
                        reciter="Nadeem Sarwar"
                        :show-reciter="false" />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="page-section" id="all-reciters-section">
      <h5>Albums</h5>
      <album name="Zindabad Ya Hussain"
             :artwork="require('../../../assets/nadeem-sarwar-vol-35.jpg')"
             year="2014"></album>
      <album name="Allah Allah Min Raasil Hussain"
             :artwork="require('../../../assets/nadeem-sarwar-vol-34.jpg')"
             year="2013"></album>
    </section>
  </div>
</template>

<script>
import HeroBanner from '../../../components/HeroBanner';
import ReciterCard from '../../../components/ReciterCard';
import TrackCard from '../../../components/TrackCard';
import Album from '../../../components/Album';

export default {
  name: 'Reciter-Profile',
  components: {
    HeroBanner,
    TrackCard,
    ReciterCard,
    Album,
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../styles/theme.styl';
@import '../../../styles/_variables.styl';

.reciter-hero {
  .reciter-hero__ribbon {
    width: 100%;
    height: 300px;
    margin-bottom: -300px;
    background: linear-gradient(to bottom right, #E90500, #FA6000);
  }
  .reciter-hero__content {
    padding: 80px 120px 24px 120px;
  }
  .reciter-hero__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -80px;
    margin-bottom: -56px;

    .avatar {
      box-sizing: content-box;
      border: 5px solid white;
    }
  }
  .reciter-hero__card {
    margin-top: 36px;
    width: 100%;
    min-height: 20px;
    position: relative;
    padding: 0 36px 24px 36px;
  }
  .reciter-hero__title {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 600;
    color: #2e2e2e;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .reciter-hero__social {
    font-size: 140%;
    list-style: none;
    margin: 16px 0;
    padding: 0;
    text-align: center;

    li {
      display: inline;

      a {
        color: inherit;
        padding: 8px;
        will-change: color;
        transition: color $transition;
        &:hover {
          color: $theme.accent;
        }
      }
    }
  }
  .reciter-hero__bio {
    margin: 8px 0 0 0;
    padding: 0;
    max-height: 108px;
    overflow: hidden;
    position: relative;
  }
}
</style>
