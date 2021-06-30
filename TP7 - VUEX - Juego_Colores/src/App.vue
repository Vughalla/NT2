<template>
  <div id="app">
    <Header/>
    <Navigator/>
    <Container/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container,    
  },
  mounted () {
    this.$store.dispatch('restart', true)
  },
  data() {
    return{
    }
  },
  methods: {
  },

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
body{
  background: #232323;
	margin: 0;
}
</style>
