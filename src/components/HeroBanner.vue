<template>
  <div class="hero" v-bind:style="style">
    <div class="hero__content">
      <slot>
        Add your content here.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero-banner',
  props: ['background'],
  computed: {
    style() {
      return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.background}')`;
    }
  },
};
</script>

<style lang="stylus" scoped>
.hero {
  background-color: gray;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 287px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
