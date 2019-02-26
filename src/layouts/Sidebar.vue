<template lang="pug">
el-container
  el-aside(width="200px")
    el-menu(:router="true" background-color='#545c64' text-color='#fff' active-text-color='#ffd04b')
      el-menu-item(index="app" :route="{name: 'app'}")
        i.el-icon-menu
        | Home
      el-menu-item(v-if="user && user.email == 'fernando.delarosa@questionpro.com'" index="admin" :route="{name: 'admin'}")
        i.el-icon-star-on
        | Admin
      el-submenu(index='2')
        template(slot='title')
          i.el-icon-setting
          | Opciones
        el-menu-item(index="#" v-on:click="logout") Salir
  el-container
    el-main
      slot
    el-footer
      span
        | Made with
        span.love ♥
</template>
<script>
import firebase from '../firebase'
export default {
  computed: {
    user(){
      return this.$store.getters.user
    },
    layout(){
      return this.$store.getters.layout
    }
  },
  methods: {
    logout(){
      firebase.auth().signOut()
      .then(() => {
        this.$router.push({ name: 'login' })
      })
      .catch((error)=> {
        console.log(error)
      });
    },
  }
}
</script>