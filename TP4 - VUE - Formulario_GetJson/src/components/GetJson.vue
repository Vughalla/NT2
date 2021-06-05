<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Conseguir datos</h2>
      <hr>

      <button class="btn btn-danger my-3 mr-3" @click="getPostsCb()">XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">Fetch</button>    
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Axios</button>    
      <button class="btn btn-dark my-3 mr-3" @click="limpiarResultados()">Limpiar resultados</button> 

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <!-- encabezado de la tabla -->
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <!-- filas con los datos -->
          <tr v-for="(post,index) in posts" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{posts.length}} datos</h4>
      </div>
      <h4 v-else class="alert alert-danger">Nada para ver aquí, sonido de grillos.</h4>

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
        url: 'https://60baf50142e1d00017620250.mockapi.io/DataSource-tp4',
        posts : []
      }
    },
    methods: {    
      /* ------ AJAX: XMLHttpRequest ------ */
      getPostsCb() {

        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })

        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })

        xhr.send()
      },

      /* ------ AJAX: FETCH ------ */
      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH',respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },

      /* ------ AJAX: AXIOS ------ */
      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data)
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      },
      limpiarResultados(){
        this.posts = []
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
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
