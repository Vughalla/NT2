<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1><i>NT2 - TP N° 6 - Belascuain</i></h1>
      <br>
      <Navbar />
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
}

h1{
  color: rgb(187, 161, 127);
}

.jumbotron{
  padding: 32px
}

</style>
