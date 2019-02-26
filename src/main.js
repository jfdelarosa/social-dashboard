import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import firebase from './firebase'
import VueFire from 'vuefire'
import axios from "axios"


import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/reset.css'

locale.use(lang)
Vue.use(ElementUI)

let instance = axios.create({
  baseURL: (process.env.NODE_ENV=="development" ? "http://localhost:8888/social-api/" : "https://jf-social-api.herokuapp.com/")
})
Vue.prototype.$http = instance

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueFire)

library.add(fab)

Vue.config.productionTip = false

import sidebarLayout from './layouts/Sidebar'
import simpleLayout from './layouts/Simple'
import bulmaLayout from './layouts/Bulma'

Vue.component("sidebar-layout", sidebarLayout)
Vue.component("simple-layout", simpleLayout)
Vue.component("bulma-layout", bulmaLayout)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})