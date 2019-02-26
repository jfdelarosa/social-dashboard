<template lang="pug">
el-container
  el-header
    .container
      el-menu(mode="horizontal" :router="true" background-color='transparent' text-color='#fff' active-text-color='#ffd04b')
        el-menu-item(index="app" :route="{name: 'app'}") Inicio
        el-menu-item(index="app" :route="{name: 'app'}") Precios
        el-menu-item(index="app" :route="{name: 'app'}") Iniciar sesión
        el-menu-item(index="app" :route="{name: 'app'}") Registro
        el-menu-item(v-if="user && user.email == 'fernando.delarosa@questionpro.com'" index="admin" :route="{name: 'admin'}") Admin
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
    .container(style="width: 800px")
      el-row(:gutter="20")
        el-col(:span="8")
          img(style="width:80%" src="undraw_savings_hjfl.svg")
        el-col(:span="8")
          img(style="width:80%" src="undraw_visual_data_b1wx.svg")
        el-col(:span="8")
          img(style="width:80%" src="undraw_dashboard_nklg.svg")
      el-row(:gutter="20")
        el-col(:span="8")
          img(style="width:80%" src="undraw_social_dashboard_k3pt.svg")
        el-col(:span="8")
          img(style="width:80%" src="undraw_data_xmfy.svg")
        el-col(:span="8")
          img(style="width:80%" src="undraw_teacher_35j2.svg")
    slot
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
body{
  background: white;
}
header.el-header{
  /*height: auto!important;*/
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
.title, .subtitle{
  text-align: center;
  color: white;
  margin: 0;
}
.title{
  font-size: 2.5rem;
}
.subtitle{
  font-size: 1.75rem;
}
.container{
  margin: 0 auto;
  width: 1000px;
}
</style>