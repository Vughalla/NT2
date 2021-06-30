import Vue from 'vue'

const miMixin = {
    computed : {
        hasWon() {
            return this.$store.state.message === 'You Picked Right!'
        },    
    },
}

Vue.mixin(miMixin)
