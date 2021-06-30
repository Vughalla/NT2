<template>

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/form">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/http">
              <a class="nav-link" href="#">Solicitud Http</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
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
  .src-components-navbar{
      background-color: rgb(99, 85, 66);
      color: white;
      border-radius: 6px;
  }
</style>
