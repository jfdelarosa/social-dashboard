<template lang="pug">
  el-card
    el-button.w100(:type="type" v-on:click="auth(type)" :loading="config[type].loading")
      font-awesome-icon(:icon="['fab', type]" v-show="!config[type].loading")
      span(v-show="!config[type].loading") &nbsp;
      | Entrar con {{type}}
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default{
  props: ["type"],
  name: "login",
  data(){
    return {
      config: {
        instagram: {
          loading: false
        },
        google: {
          loading: false
        },
        twitter: {
          loading: false
        },
        facebook: {
          loading: false
        }
      }
    }
  },
  methods: {
    auth(type) {
      this.config[type].loading = true
      switch (type){
        case "instagram":
          console.log("Aun no :(")
        break;
        case "google":
          this.signIn(type, new firebase.auth.GoogleAuthProvider())
        break;
        case "twitter":
          this.signIn(type, new firebase.auth.TwitterAuthProvider())
        break;
        case "facebook":
          this.signIn(type, new firebase.auth.FacebookAuthProvider())
        break;
      }
    },
    signIn(type, provider){
      firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        var user = result.user;
        console.log(result)
      }).catch((error) => {
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
      this.config[type].loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@each $type, $color in (instagram, #e4405f), (google, #dd4b39), (twitter, #55acee), (facebook, #3b5999){
  .el-button--#{$type}{
    color: #FFF;
    background-color: $color;
    border-color: $color;
    &:focus, &:hover{    
      background: darken($color, 10%);
      border-color: darken($color, 10%);
      color:#fff;
    }
    &.is-active, &:active{    
      background: lighten($color, 10%);
      border-color: lighten($color, 10%);
      color:#fff;
      outline:0;
    }
    &.is-disabled, &.is-disabled:active, &.is-disabled:focus, .is-disabled:hover{    
      color:#fff!important;
      background-color: lighten($color, 20%)!important;
      border-color: lighten($color, 20%)!important;
    }
  }
}

</style>