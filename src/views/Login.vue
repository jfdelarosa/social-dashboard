<template lang="pug">
  .cont
    el-button.back(type="text" v-on:click="goto('home')")
      i.el-icon-arrow-left
      | Back to homepage
    el-card
      el-alert(v-if="error != ''" :title="error" type="error" :closable="false" show-icon)
      h1 Sign in
      el-form(label-position="top" v-on:submit.native.prevent="doLogin")
        el-form-item(label="Email")
          el-input(v-model="email" placeholder="Ej: email@domain.com")
        el-form-item(label="Password")
          el-input(v-model="password" type="password")
        el-form-item(style="margin: 0")
          el-button(type="success" v-on:click="doLogin") Sign in
          el-button(type="text" v-on:click="goto('register')") Sign up

</template>

<script>
import firebase from '../firebase'
const db = firebase.firestore()
export default{
  name: "login",
  data(){
    return {
      error: "",
      email: "",
      password: ""
    }
  },
  methods: {
    goto(name){
      this.$router.push({name:name})
    },
    doLogin(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
        this.$router.push({ name: 'app' })
      }).catch((error) => {
        this.error = error.message;
      });
    }
  }
}
</script>

<style scoped>
.cont{
  width: 400px;
  margin: 5rem auto;
}
.back{
  color: #888;
}
</style>