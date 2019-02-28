<template lang="pug">
el-container
  el-header
    .container.has-top-menu
      el-menu.top-menu(mode="horizontal" :router="true" background-color='transparent' text-color='#fff' active-text-color='#ffd04b')
        el-menu-item(index="app" :route="{name: 'home'}") Inicio
        el-menu-item(index="app" :route="{name: 'app'}") Precios
        el-menu-item(v-if="!user" index="login" :route="{name: 'login'}") Iniciar sesión
        el-menu-item.has-button(v-if="!user" index="register" :route="{name: 'register'}")
          el-button(type="primary" round) Registro
        el-menu-item(v-if="user && user.email == 'fernando.delarosa@questionpro.com'" index="admin" :route="{name: 'admin'}") Admin
        el-menu-item(v-if="user" index="#" v-on:click="logout") Salir
        el-menu-item.has-button(v-if="user" index="app" :route="{name: 'app'}")
          el-button(type="primary" round) Ir a la App
        //- el-submenu(index='2')
          template(slot='title')
            i.el-icon-setting
            | Opciones
          el-menu-item(index="#" v-on:click="logout") Salir
    div
      h1.title Titulo
      h3.subtitle subtitulo
    svg(viewBox='0 0 100 25' preserveAspectRatio="none" height="200px")
        path(fill='#FFFFFF' opacity='0.7' d='M0 30 V15 Q30 3 60 15 V30z')
        path(fill='#FFFFFF' d='M0 30 V12 Q30 17 55 12 T100 11 V30z')
  el-main
    slot
    footer
      p Diseñado por 
        a(href="#") Internet Mariachi
        | .
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
body{
  background: white;
}
.container{
  margin: 0 auto;
  max-width: 1000px;
}
.container.has-top-menu{
  width: 1000px;
}
.el-main{
  padding: 0;
}
header.el-header{
  background-image: linear-gradient(to bottom right, #00c4ff 0%, #209cee 100%);
  height: 70vh!important;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
svg{
  width: 100%;
  display: block;
}
.el-menu{
  border: none;
}
.el-menu li:hover{
  background: rgba(255, 255, 255, 0.1)!important;
}
header .title, header .subtitle{
  text-align: center;
  color: white;
  margin: 0;
}
header .title{
  font-size: 2.5rem;
}
header .subtitle{
  font-size: 1.75rem;
}
.has-button .el-button{
  background: rgba(255, 255, 255, 0.9);
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #209cee;
}
.el-menu li.has-button:hover{
  background-color: transparent!important;
}
.has-button .el-button:hover{
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}
footer{
  background: #333c44;
  padding: 2rem 0;
  text-align: center;
  color: white;
}
footer a{
  color: #d9d9d9;
  border-bottom: 1px dotted white;
}
</style>