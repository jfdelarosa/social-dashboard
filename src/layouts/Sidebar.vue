<template lang="pug">
el-container.app
  el-aside(width="200px")
    el-menu.sidebar-menu(:router="true" background-color='#2f3542' text-color='#fff' active-text-color='#ffd04b')
      el-menu-item(index="app" :route="{name: 'app'}")
        i.el-icon-menu
        | Home
      el-menu-item(v-if="user && user.email == 'fernando.delarosa@questionpro.com'" index="admin" :route="{name: 'admin'}")
        i.el-icon-star-on
        | Admin
      el-menu-item(v-if="user && user.email.includes('@questionpro.com')" index="twitterQp" :route="{name: 'twitterQp'}")
        font-awesome-icon.fa-menu(:icon="['fab', 'twitter']")
        | Tweets
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
        this.$store.commit('SET_USER', null)
        this.$router.push({ name: 'home' })
      })
      .catch((error)=> {
        console.log(error)
      });
    },
  }
}
</script>
<style scoped>
.el-menu{
  height: 100%;
  border: none;
}
.w100{
  width: 100%;
}
.p0 .el-card__body{
  padding: 0!important;
}
.el-card__body{
  overflow: hidden!important;
  clear: both!important;
}
.fr{
  float: right;
}
.bw{
  word-break: break-word!important;
}
.mb{
  margin-bottom: 1rem!important;
}
.w0{
  width: 0!important;
}
.el-dialog__body{
  padding: 0 20px!important;
}
.el-form-item{
  margin-bottom: 1rem;
}
.el-form-item__label{
  height: 2rem;
}
.el-footer{
  opacity: 0.6;
  text-align: center;
}
.love{
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>