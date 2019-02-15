<template lang="pug">
  el-container
    el-main
      el-row(:gutter="10")
        el-col(:span="6" v-for="(app, key) in apps")
          div(v-if="app.loggedIn")
          my-login(:type="key" v-else)

      //- el-card(style="margin-bottom: 1.5rem")
        el-row(v-bind:gutter="20")
          el-col(v-bind:span="24")
            el-button.w100(type="primary" icon="el-icon-circle-check-outline" :loading="loading") Entrar
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import myLogin from "../components/MyLogin.vue"
export default {
  components: {
    myLogin
  },
  name: 'app',
  data(){
    return {
      loading: false,
      apps: {
        instagram: {
          loggedIn: false
        },
        google: {
          loggedIn: false
        },
        twitter: {
          loggedIn: false
        },
        facebook: {
          loggedIn: false
        }
      }
    }
  },
  methods: {
    // getCredential(app){
    //   switch (app) {
    //     case "twitter":
    //       const token = "1069974221797904384-KHYrRLVHqs99ZXWGILuoy1bOfRzR4D"
    //       const secret = "lEit8Ptut7eGeWDrvyWB2MREVEQvfdtISEsPI3XGp8sbD"
    //       const credential = firebase.auth.TwitterAuthProvider.credential(token, secret);
    //       this.retrieve(credential)
    //     break;
    //   }
    // },
    // retrieve(credential){
    //   firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     const email = error.email;
    //     const credential = error.credential;
    //     console.log(error)
    //   });
    // }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(user.providerData)
      }
    })
  }
}
</script>