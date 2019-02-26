<template lang="pug">
el-container
  el-aside(width="200px")
    el-menu(:router="true" background-color='#2f3542' text-color='#fff' active-text-color='#ffd04b')
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
<style scoped>
.el-menu{
  height: 100%;
}
.el-submenu .el-menu-item{
  min-width: 100%;
}
html, body, #app, .el-container{
  height: 100%;
}
body{
  background: #d8e4ec;
  padding: 0;
  margin: 0;
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
.el-footer{
  opacity: 0.6;
  text-align: center;
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
.love{
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>