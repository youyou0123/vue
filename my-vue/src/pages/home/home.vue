<template>
  <div>
    <home-header></home-header>
    <!-- <home-swiper></home-swiper> -->
    <!-- <home-layout></home-layout> -->
    <home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeLayout from './components/layout.vue'
import HomeIcon from './components/icon.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeLayout,
    HomeIcon
  }
}

</script>

<style>

</style>
