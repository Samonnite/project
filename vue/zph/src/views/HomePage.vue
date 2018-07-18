<template>
  <div id="homePage">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'HomePage',
  components: {Footer}
}
</script>

<style lang="scss">
</style>
