<template>
  <v-card class="reciter-card" :style="{ 'background-color': background }">
    <div class="reciter-card__avatar">
      <v-avatar size="48px">
        <img ref="avatarElement" :src="avatar" :alt="name">
      </v-avatar>
    </div>
    <div class="reciter-card__text" :style="{ 'color': textColor }">
      <div class="reciter-card__name body-2" :title="name">
        {{ name }}
      </div>
      <div class="reciter-card__albums caption" :title="albums + ' Albums'">
        {{ albums }} Albums
      </div>
    </div>
  </v-card>
</template>

<script>
import Vibrant from 'node-vibrant';

export default {
  name: 'reciter-card',
  props: ['name', 'albums', 'avatar'],
  mounted() {
    const image = this.$refs.avatarElement;
    this.setBackgroundFromImage(image);
  },
  methods: {
    setBackgroundFromImage(image) {
      Vibrant.from(image.src).getPalette().then((palette) => {
        const swatch = palette.DarkVibrant;
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
      background: '#ddd',
      textColor: 'black',
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/_variables.styl';
@import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';

.reciter-card {
  padding: 16px;
  display: flex;
  align-items center;
  background: gray;
  cursor: pointer;
  will-change: box-shadow background-color;
  transition: background-color $transition, box-shadow $transition;

  &:hover {
    elevation(8);
  }

  .reciter-card__text {
    margin-left: 16px;
    will-change: color;
    transition: color $transition;
    overflow: hidden;

    .reciter-card__name {
      white-space nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: auto;
    }
  }

  .reciter-card__avatar .avatar {
    border: 2px solid white;
    overflow: hidden;
  }
}
</style>
