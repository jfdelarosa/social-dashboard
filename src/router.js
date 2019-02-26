import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import App from './views/App.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // redirect: '/login'
      component: Home,
      meta: {
        layout: 'bulma'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'simple'
      }
    },
    {
      path: '/app',
      name: 'app',
      component: App,
      meta: {
        requiresAuth: true,
        layout: 'sidebar'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        layout: 'sidebar'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !currentUser){
    next({name: "login"})
  }else if(!requiresAuth && currentUser){
    // next({name: "app"})
    next()
  }else{
    next()
  }
})

export default router