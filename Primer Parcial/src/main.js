import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './router'
import './form'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
