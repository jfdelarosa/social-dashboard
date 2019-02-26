<template lang="pug">
  .cont
    el-card
      el-alert(v-if="error != ''" :title="error" type="error" :closable="false" show-icon)
      h1(v-if="onSignIn") Sign in
      h1(v-else) Sign up
      el-form(label-position="top" v-on:submit.native.prevent="doLogin" v-if="onSignIn")
        el-form-item(label="Email")
          el-input(v-model="email" placeholder="Ej: email@domain.com")
        el-form-item(label="Password")
          el-input(v-model="password" type="password")
        el-form-item(style="margin: 0")
          el-button(type="success" v-on:click="doLogin") Sign in
          el-button(type="text" v-on:click="changeStatus") Sign up
      el-form(label-position="top" v-on:submit.native.prevent="doRegister" v-else)
        el-form-item(label="Email")
          el-input(v-model="email" placeholder="Ej: email@domain.com")
        el-form-item(label="Password")
          el-input(v-model="password" type="password")
        el-form-item(style="margin: 0")
          el-button(type="primary" v-on:click="doRegister") Sign up
          el-button(type="text" v-on:click="changeStatus") Sign in

</template>

<script>
import firebase from '../firebase'
const db = firebase.firestore()
export default{
  name: "login",
  data(){
    return {
      onSignIn: true,
      error: "",
      email: "fernando.delarosa@questionpro.com",
      password: "au6YJtseRH"
    }
  },
  methods: {
    changeStatus(){
      this.email = ""
      this.password = ""
      this.onSignIn = !this.onSignIn;
    },
    doRegister(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) => {
        console.log(res)
        db.collection('layouts').doc(res.user.uid).set({
          layout: [],
          created: Date.now(),
          updated: Date.now()
        })
        this.$router.push({ name: 'app' })
      }).catch((error) => {
        this.error = error.message;
      });
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

<style>
.cont{
  max-width: 400px;
  margin: 5rem auto;
}
</style>