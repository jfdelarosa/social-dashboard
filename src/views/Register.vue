<template lang="pug">
  .cont
    el-button.back(type="text" v-on:click="goto('home')")
      i.el-icon-arrow-left
      | Back to homepage
    el-card
      el-alert(v-if="error != ''" :title="error" type="error" :closable="false" show-icon)
      h1 Sign up
      el-form(label-position="top" v-on:submit.native.prevent="doRegister")
        el-form-item(label="Email")
          el-input(v-model="email" placeholder="Ej: email@domain.com")
        el-form-item(label="Password")
          el-input(v-model="password" type="password")
        el-form-item(style="margin: 0")
          el-button(type="primary" v-on:click="doRegister") Sign up
          el-button(type="text" v-on:click="goto('login')") Sign in

</template>

<script>
import firebase from '../firebase'
const db = firebase.firestore()
export default{
  name: "register",
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
    doRegister(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res) => {
        console.log(res)
        db.collection('layouts').doc(res.user.uid).set({
          layout: [],
          created: new Date(),
          updated: new Date()
        })
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