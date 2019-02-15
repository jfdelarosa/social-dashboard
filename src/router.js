import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

import App from './views/App.vue'
import Login from './views/Login.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/app',
      name: 'app',
      component: App,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router