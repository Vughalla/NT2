<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Trabajo práctico 4</h1>
      <br>
      <Navbar />
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

h1 {
  color: rgb(175, 101, 17);
}

.jumbotron {
  padding: 32px !important;
}

</style>
