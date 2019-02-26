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
html, body, #app, .el-container{
  height: 100%;
}
body{
  background: #d8e4ec;
  padding: 0;
  margin: 0;
}
.el-menu{
  height: 100%;
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
