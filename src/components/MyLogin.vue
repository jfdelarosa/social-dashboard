<template lang="pug">
  div
    el-button.w100(:type="type" v-on:click="auth(type)" :loading="loading" size="small")
      font-awesome-icon(:icon="['fab', type]" v-show="!loading")
      span(v-show="!loading") &nbsp;
      | Entrar con {{type}}
</template>

<script>
import firebase from '../firebase'

const db = firebase.firestore()

export default{
  props: ["type"],
  name: "myLogin",
  data(){
    return {
      response: "",
      test: [],
      config: {
      }
    }
  },
  computed: {
    loading(){
      return this.$store.getters.loading(this.type)
    }
  },
  methods: {
    auth(type) {
      this.$store.commit('SET_LOADING', {client: this.type, status: true})
      switch (type){
        case "instagram":
          console.log("Aun no :(")
        break;
        case "google":
          this.signIn(type, new firebase.auth.GoogleAuthProvider());
        break;
        case "twitter":
          this.signIn(type, new firebase.auth.TwitterAuthProvider());
        break;
        case "facebook":
          let provider = new firebase.auth.FacebookAuthProvider();
          provider.addScope('user_birthday');
          this.signIn(type, provider);
        break;
      }
    },
    signIn(type, provider){
      firebase.auth().currentUser.linkWithPopup(provider).then((result) => {
        let credentials = {
          token: result.credential.accessToken,
          secret: result.credential.secret,
          user: result.user
        }
        console.log(credentials)
        this.$store.dispatch('appendCredentials', {client: "twitter", credentials: credentials})
        this.$store.commit('SET_LOADING', {client: this.type, status: false})
        // this.$router.go(this.$router.currentRoute)
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  firestore(){
    return {
      test: db.collection("test")
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