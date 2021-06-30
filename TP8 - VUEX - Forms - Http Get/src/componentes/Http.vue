<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Solicitud Http</h2>
      <hr>   
      <button class="btn btn-success my-3 mr-3" @click="getUsersAxios()">Get Data</button>    

      <div v-if="$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(user,index) in $store.state.usuarios" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{user[col]}}</td>
          </tr>
        </table>
      </div>
      <h4 v-else-if="click" class="alert alert-danger">No hay usuarios disponibles</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {        
      }
    },
    methods: {
      getUsersAxios() {
        this.$store.dispatch('getUsuarios')
      }
    },
    computed: {
      getCols() {
        return Object.keys(this.$store.state.usuarios[0])
      }
    }
}


</script>

<style scoped lang="css">
  .jumbotron{
    background-color: rgb(143, 123, 97);
    color: white;
  }

  hr{
    background-color: #eee;
  }
</style>
