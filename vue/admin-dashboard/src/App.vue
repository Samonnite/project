<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
import 'normalize.css'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
html,
body,#app {
  background: #405775;
}
#app {
}
</style>
