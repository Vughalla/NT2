import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario/index.vue'
import GetJson from './components/GetJson.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/Formulario' },
        { path: '/Formulario', component: Formulario },
        { path: '/GetJson', component: GetJson }
    ]
})