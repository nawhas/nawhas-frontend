<template>
  <div>
    <hero-banner :background="require('../../assets/imam-hussain-header.jpg')">
      <hero-quote author="Imam Jafar Sadiq (a.s.)">
        The murder of Hussain has lit a fire in the hearts of the believers which will never extinguish.
      </hero-quote>
    </hero-banner>
  </div>
</template>

<script>
import HeroBanner from '../../components/HeroBanner';
import HeroQuote from '../../components/HeroQuote';

export default {
  name: 'Home',
  components: {
    HeroBanner,
    HeroQuote,
  },
};
</script>
