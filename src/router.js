import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import App from "./views/app/App.vue";
import Admin from "./views/app/Admin.vue";
import twitterQp from "./views/qp/Twitter.vue";
import dailyQp from "./views/qp/Daily.vue";
import hashtagQp from "./views/qp/Hashtag.vue";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      // redirect: '/login'
      name: "home",
      component: Home,
      meta: {
        layout: "bulma"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        layout: "simple"
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        layout: "simple"
      }
    },
    {
      path: "/app",
      name: "app",
      component: App,
      meta: {
        requiresAuth: true,
        layout: "sidebar"
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true,
        layout: "sidebar"
      }
    },
    {
      path: "/twitter-qp",
      name: "twitterQp",
      component: twitterQp,
      meta: {
        requiresAuth: true,
        layout: "sidebar"
      }
    },
    {
      path: "/daily-qp",
      name: "dailyQp",
      component: dailyQp,
      meta: {
        requiresAuth: true,
        layout: "sidebar"
      }
    },
    {
      path: "/hashtag-qp",
      name: "hashtagQp",
      component: hashtagQp,
      meta: {
        requiresAuth: true,
        layout: "sidebar"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next({ name: "login" });
  } else if (!requiresAuth && currentUser) {
    // next({name: "app"})
    next();
  } else {
    next();
  }
});

export default router;
