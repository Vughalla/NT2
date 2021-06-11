
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nomApeLengthMin : 3,
      nomApeLengthMax : 15,
      notaMin : 0,
      notaMax : 10,
      alumnos: [],
      promedio: 0
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: ''
      }
    },
    enviar() {
      console.log({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    },
    enviarNota() {
      let alumno =  { 
          nombre: document.getElementById('nombre').value,
          apellido: document.getElementById('apellido').value,
          nota: document.getElementById('nota').value
      }
      this.alumnos.push(alumno)
      this.calcularPromedio()
    },
    calcularPromedio(){
      this.promedio = 0
      let totalAcum = 0
      this.alumnos.forEach(alumno => totalAcum = parseInt(totalAcum) + parseInt(alumno.nota))
      console.log(totalAcum)
      this.promedio = totalAcum / this.alumnos.length
    },

    getColor(nota){
      let color
      if (nota <= 3){
        color = "red"
      }
      else if (nota >= 7){
        color = "green"
      }
      else {
        color = "yellow"
      }
      return color
    }
    

  }
}


