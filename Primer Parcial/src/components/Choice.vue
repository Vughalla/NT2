<template>

  <div class="table-responsive">
      <table class="table">
          <tr class="bg-success text-white">
              <th>Pregunta</th>
              <th>Respuesta</th>
          </tr>
          <tr v-for="(respuestas,index) in respuestas" :key="index" class="bg-dark text-white">
            <td>{{ respuestas.numeroDePregunta }}</td>
            <td>{{ respuestas.respuesta }}</td>
          </tr>
      </table>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
        { numeroDePregunta: 1,  respuesta: "C"},
        { numeroDePregunta: 2,  respuesta: "C"},
        { numeroDePregunta: 3,  respuesta: "B"}
        ]
      }
    },
    methods: {    
    },
    computed: {
    }
}

</script>

<style scoped lang="css">
  .src-componentes-http {

  }

  .jumbotron {
    background: rgb(180,221,180); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(180,221,180,1) 0%, rgba(131,199,131,1) 17%, rgba(82,177,82,1) 33%, rgba(0,138,0,1) 67%, rgba(0,87,0,1) 83%, rgba(0,36,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 17%,rgba(82,177,82,1) 33%,rgba(0,138,0,1) 67%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */

    background: rgb(180,221,180); /* Old browsers */
    color: white;
  }

  hr {
    background-color: #fff;
  }  
</style>
