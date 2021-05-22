new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
        rangoCuracion: [8, 15]
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },

        empezarPartida: function () {
            this.hayUnaPartidaEnJuego = true
            this.saludJugador = 100
            this.saludMonstruo = 100
        },

        atacar: function () {
            var golpe = this.calcularHeridas(this.rangoAtaque)
            this.saludMonstruo -= golpe
            this.registrarEvento(true, "El jugador atacó al monstruo por " + golpe)
            if (this.verificarGanador()){
                return
            }
            this.ataqueDelMonstruo()
        },

        ataqueEspecial: function () {
            var golpe = this.calcularHeridas(this.rangoAtaqueEspecial)
            this.saludMonstruo -= golpe
            this.registrarEvento(true, "El jugador atacó al monstruo por " + golpe)
            if (this.verificarGanador()){
                return
            }
            this.ataqueDelMonstruo()
        },

        curar: function () {
            var curacion = Math.max(Math.floor(Math.random() * this.rangoCuracion[1]) + 1, this.rangoCuracion[0]) 
            var vidaActual = this.saludJugador
            var vidaCurado = this.saludJugador += curacion
            if (vidaCurado < 100) {
                this.saludJugador = vidaCurado
                this.registrarEvento(true, "El jugador curo sus heridas por " + curacion)
            } else {
                this.saludJugador = 100
                this.registrarEvento(true, "El jugador curo sus heridas por " + (vidaCurado-vidaActual))
            }
            this.ataqueDelMonstruo()
            if (this.verificarGanador()){
                return
            }
        },

        registrarEvento(turno, texto) {
            this.turnos.unshift({
                esJugador: turno,
                text: texto
            })
            this.turnos.push({esJugador: turno, text: texto})
        },

        terminarPartida: function () {
            this.saludJugador = 0
            this.verificarGanador()
        },

        ataqueDelMonstruo: function () {
            var golpe = this.calcularHeridas(this.rangoAtaqueDelMonstruo)
            this.saludJugador -= golpe
            this.registrarEvento(false, "El monstruo atacó al jugador por " + golpe)
            if (this.verificarGanador){
                return
            }
        },

        calcularHeridas: function (rango) {
            var golpe = Math.max(Math.floor(Math.random() * rango[1]) + 1, rango[0]) 
            return golpe
        },

        verificarGanador: function () {
            if (this.saludMonstruo <= 0){
                if (confirm("Ganaste! Jugar de nuevo?")){
                    this.empezarPartida()
                } else {
                    this.hayUnaPartidaEnJuego = false
                }
                return true
            } else if (this.saludJugador <= 0) {
                if (confirm("Perdiste! Jugar de nuevo?")){
                    this.empezarPartida()
                } else {
                    this.hayUnaPartidaEnJuego = false
                }
                return true
            }
            return false;
        },

        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }
    }
});