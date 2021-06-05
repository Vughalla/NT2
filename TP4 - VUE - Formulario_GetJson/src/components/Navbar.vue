<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-info">
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/GetJson">
              <a class="nav-link" href="#">GetJson</a>
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
    mounted () {},
    data () { return {}},
    methods: {},
    computed: {}
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
