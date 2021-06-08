<template>
  <div id="app" class="container-fluid mt-3">
  <ColorsGame />
  </div>
</template>

<script>
import ColorsGame from './components/ColorsGame.vue'

export default {
  name: 'App',
  components: {
    ColorsGame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
