<template>
  <div>
    <h3>Reciters Page</h3>
    <v-btn @click="loadReciters()">Load Reciters</v-btn>
    <div v-for="reciter in reciters" :key="reciter.id"><p>{{ reciter.name }}</p></div>
  </div>
</template>

<script>
export default {
  name: 'Reciters',
  methods: {
    loadReciters() {
      this.$store.dispatch('reciters/fetchReciters');
    }
  },
  computed: {
    reciters() {
      return this.$store.state.reciters.collection;
    }
  }
};
</script>
