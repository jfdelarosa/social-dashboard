import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import firebase from './firebase'
import { firestorePlugin } from 'vuefire'
import axios from "axios"

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/reset.css'

import sidebarLayout from './layouts/Sidebar'
import simpleLayout from './layouts/Simple'
import bulmaLayout from './layouts/Bulma'


let baseURL
if(process.env.NODE_ENV=="development"){
  baseURL = "http://localhost:8888/social-api/"
}else{
  baseURL = "https://jf-social-api.herokuapp.com/"
}
let instance = axios.create({
  baseURL: baseURL
})
Vue.prototype.$http = instance


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI, { locale })
Vue.use(firestorePlugin)

library.add(fab)

Vue.config.productionTip = false

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