<template>
  <div>
    <h1>FINAL - Belascuain Emmanuel P.</h1>
    <input type="text" v-model="mensaje">
    <h3>Cantidad: {{ mensaje.length }}</h3>
    <h3>Codificado: {{ mensaje | codificar }}</h3>
    <h3>Mayúscula: {{ mensaje | mayus }}</h3>
    <h3>Minúscula: {{ mensaje | minus }}</h3>
    <h3>Mayúscula/Minúscula: {{ mensaje | mayusMinus }}</h3>
    <h3>Minúscula/Mayúscula: {{ mensaje | minusMayus }}</h3>
    <br>
    <br>
    <p>Respuestas= 1:B, 2:B, 3:C, 4:B, 5:B</p>
  </div>
  
</template>

<script>
export default {
  name: 'Codificacion',
  props: {},
  data() {
    return {
      mensaje: ''
    }
  },
  filters: {
    codificar(mensaje) {
      let codificado = []
      let mensajeArr = mensaje.toLowerCase().split('')
      mensajeArr.forEach(element => {
        if (element == 'a') {
          element = 'u'
        } else if (element == 'u') {
          element = 'a'
        } else if (element == 'e') {
          element = 'o'
        } else if (element == 'o') {
          element = 'e'
        }
        codificado.push(element)
      });
      return codificado.join("")
    },
    mayus(mensaje) {
      return mensaje.toUpperCase()
    },
    minus(mensaje) {
      return mensaje.toLowerCase()
    },
    mayusMinus(mensaje){
      let mayusMinus = []
      for(let i=0; i < mensaje.length; i++){
        if (i % 2 == 0) {
          mayusMinus.push(mensaje[i].toUpperCase())
        } else {
          mayusMinus.push(mensaje[i].toLowerCase())
        }
      }
      return mayusMinus.join("")
    },
    minusMayus(mensaje){
      let minusMayus = []
      for(let i=0; i < mensaje.length; i++){
        if (i % 2 == 0) {
          minusMayus.push(mensaje[i].toLowerCase())
        } else {
          minusMayus.push(mensaje[i].toUpperCase())
        }
      }
      return minusMayus.join("")
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
