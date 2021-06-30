<template>

<div id="container">
     <ul  v-for="(color, index) in $store.state.colors" :key="color.id">
         <Square v-if="hasWon"  :color="$store.state.pickedColor" :i="index" />
         <Square v-else  :color="$store.state.colors[index]" :i="index" />
    </ul>   
</div>

</template>

<script lang="js">
  import Square from './Square.vue'
  export default  {
    name: 'Container',
    components:{ 
        Square
    },
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}

</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>