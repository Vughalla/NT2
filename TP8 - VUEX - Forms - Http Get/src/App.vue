<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP8 - Belascuain</h1>
      <br>

      <Navbar />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
    }
  },
  methods : {
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
