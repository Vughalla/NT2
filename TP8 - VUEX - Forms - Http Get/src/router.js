import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from './componentes/FormularioAv/index.vue'
import Http from './componentes/Http.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/form', component: Form },
        { path: '/http', component: Http }
    ]
})