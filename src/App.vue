<template lang="pug">
  #app
    component(:is="page")
      router-view
</template>
<script>
import firebase from './firebase'

const db = firebase.firestore()
export default {
  computed: {
    user(){
      return this.$store.getters.user
    },
    page(){
      console.log(this.$route)
      return (this.$route.meta.layout || "sidebar") + "-layout"
    }
  },
  data(){
    return {
      layout: []
    }
  },
  mounted(){
    console.log("loaded App")
    this.$store.commit('SET_LOADING', true)
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.commit('SET_USER', user)
        for(let provider of user.providerData){
          let client = provider.providerId.split(".")[0]
          if(client!="password"){
            this.$store.commit('SET_STATUS', {client: client, status: true})
            this.$store.commit('SET_DATA', {client: client, provider: provider})
          }
        }
        this.$store.commit('SET_LOADING', false)
        db.collection("layouts").doc(user.uid)
        .get()
        .then((snap) => {
          let layout = snap.data()
          this.$store.commit('SET_LAYOUT', layout.layout)
        })
      }
    })
  }
}
</script>
<style>
html, body, #app{
  height: 100%;
}
body{
  padding: 0;
  margin: 0;
}
.el-container.app{
  height: 100%;
  background: #d8e4ec;
}
.el-menu.sidebar-menu{  
  height: 100%;
  border: none;
}
.el-menu.top-menu{
  float: right;
}
.el-submenu .el-menu-item{
  min-width: 100%!important;
}
.fa-menu{
  margin-right: 10px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
  color: #909399;
}
.is-active .fa-menu{
  color: rgb(255, 208, 75);
}
</style>
