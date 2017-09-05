<template>
  <v-card class="track-card" :style="{ 'background-color': background }">
    <div class="track-card__text" :style="{ 'color': textColor }">
      <div class="track-card__name body-2" :title="name">
        {{ name }}
      </div>
      <div class="track-card__album caption" :title="album">
        {{ album }}
      </div>
      <div class="track-card__reciter-year caption" :title="reciterYear">
        {{ reciterYear }}
      </div>
    </div>
    <div class="track-card__album-art" ref="artwork" :style="{'background-image': artworkBackground}">
      <div class="track-card__album-art-gradient" :style="{background: gradient}"></div>
    </div>
  </v-card>
</template>

<script>
import Vibrant from 'node-vibrant';

export default {
  name: 'track-card',
  props: ['name', 'album', 'reciter', 'year', 'artwork', 'showReciter'],
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

<style lang="stylus" scoped>
@import '../styles/_variables.styl';
@import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

.track-card {
  padding: 0;
  display: flex;
  align-items center;
  justify-content: space-between;
  background: gray;
  cursor: pointer;
  will-change: box-shadow background-color;
  transition: background-color $transition, box-shadow $transition;

  &:hover {
    elevation(8);
  }

  .track-card__text {
    padding: 24px;
    will-change: color;
    transition: color $transition;
    overflow: hidden;

    .track-card__name, .track-card__album, .track-card__reciter-year {
      white-space nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: auto;
    }
  }

  .track-card__album-art {
    width: 112px;
    height: 112px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .track-card__album-art-gradient {
      width: 30%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      will-change: background;
      transition: background $transition,
    }

    > img {
      width: 100%;
      height: auto;
    }
  }
}
</style>