import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

import App from './views/App.vue'
import Login from './views/Login.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !currentUser){
    next("login")
  }else if(!requiresAuth && currentUser){
    next("app")
  }else{
    next()
  }
})

export default router