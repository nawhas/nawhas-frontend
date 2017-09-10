<template>
  <v-card class="album">
    <div class="album__header" :style="{ 'background-color': background }">
      <v-avatar tile size="128px" class="album__artwork white">
        <img :src="artwork" :alt="name" ref="artwork">
      </v-avatar>
      <div class="album__details" :style="{ color: textColor }">
        <h5 class="album__title">{{ name }}</h5>
        <h6 class="album__release-date"><strong>{{ year }}</strong> • Muharram 1436</h6>
      </div>
    </div>
    <v-data-table
        :headers="headers"
        :items="tracks"
        hide-actions
        class="album__tracks"
    >
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.number }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.reciter }}</td>
        <td>{{ props.item.topics.join(', ') }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import Vibrant from 'node-vibrant';

export default {
  name: 'album',
  props: ['name', 'album', 'year', 'artwork'],
  mounted() {
    this.setBackgroundFromImage();
  },
  methods: {
    setBackgroundFromImage() {
      Vibrant.from(this.artwork).getPalette().then((palette) => {
        const swatch = palette.DarkMuted;
        if (!swatch) {
          return;
        }
        this.background = swatch.getHex();
        this.textColor = swatch.getBodyTextColor();
      });
    }
  },
  data() {
    return {
      tracks: [
        {number: 1, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 2, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 3, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 4, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 5, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 6, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 7, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 8, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 9, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
        {number: 10, name: 'Allah Allah Min Raasin Hussain', reciter: 'Nadeem Sarwar', topics: ['Imam Hussain', 'General']},
      ],
      headers: [
        {
          text: '#',
          value: 'number',
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name',
        },
        {
          text: 'Reciter',
          align: 'left',
          value: 'reciter',
        },
        {
          text: 'Topics',
          align: 'left',
          value: 'topics',
        },
      ],
      background: '#444444',
      textColor: 'white',
    };
  },
  computed: {
    reciterYear() {
      if (this.showReciter) {
        return `${this.reciter} • ${this.year}`;
      }
      return this.year;
    },
    gradient() {
      const rgb = Vibrant.Util.hexToRgb(this.background);
      return `linear-gradient(to right, rgba(${rgb.join(', ')}, 1), rgba(${rgb.join(', ')}, 0)`;
    },
    artworkBackground() {
      return `url(${this.artwork})`;
    }
  },
};
</script>

<style lang="stylus">
@import '../styles/_variables.styl';
@import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

.album {
  margin-top: 90px;

  .album__header {
    position: relative;

    .album__artwork {
      margin-top: -48px;
      margin-left: 24px;
      border: 5px solid white;
      float: left;
      overflow: hidden;
      box-sizing: content-box;
      elevation(2);
    }
    .album__details {
      margin-left: 128px + 24px;
      padding: 24px 32px;
      color: white;

      .album__title {
        margin: 0 0 8px 0;
        padding: 0;
        font-weight: 700;
        font-size: 24px;
      }
      .album__release-date {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
  .album__tracks {
    .datatable {
      th:focus, td:focus {
        outline: none !important;
      }
    }
  }
}
</style>
