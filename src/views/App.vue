<template lang="pug">
  el-container
    el-main
      dnd-grid-container(:layout.sync="layout" :cellSize="cellSize" :maxColumnCount="maxColumnCount" :maxRowCount="maxRowCount" :margin="margin" :bubbleUp="bubbleUp")
        dnd-grid-box(v-for="(value, key) in layout" :boxId="value.id" :key="value.id")
          //- dragSelector=".el-card__header"
          dynamic(:type="value.component" :network="value.network")
          //- el-card(style="height: 100%")
          //-   div(slot="header")
          //-     span hola
          //-   div mundo
      //- el-row(:gutter="10")
      //-   el-col(:span="6" v-for="app in apps")
      //-     my-login(:type="app" v-if="!status(app)")
      //-     followers-count(v-if="status(app)")

      //- el-card(style="margin-bottom: 1.5rem")
        el-row(v-bind:gutter="20")
          el-col(v-bind:span="24")
            el-button.w100(type="primary" icon="el-icon-circle-check-outline" :loading="loading") Entrar
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import myLogin from "../components/MyLogin.vue"
// import FollowersCount from "../components/twitter/FollowersCount.vue"
import Dynamic from "../components/Dynamic.vue"
import { Container, Box } from '@dattn/dnd-grid'
import '@dattn/dnd-grid/dist/dnd-grid.css'

function loadComponent(component){

}

export default {
  components: {
    myLogin,
    // FollowersCount,
    Dynamic,
    DndGridContainer: Container,
    DndGridBox: Box
  },
  name: 'app',
  data(){
    return {
      loading: false,
      tipo: null,
      component: null,
      apps: ["instagram", "google", "twitter", "facebook"],
      cellSize: {
        w: 100,
        h: 110
      },
      maxColumnCount: 10,
      maxRowCount: Infinity,
      bubbleUp: false,
      margin: 5,
      layout: [
        {
          id: 'FollowersCount',
          component: "FollowersCount",
          network: "twitter",
          hidden: false,
          pinned: false,
          position: {
            x: 0,
            y: 0,
            w: 2,
            h: 2
          }
        }
      ]
    }
  },
  methods: {
    status(client){
      return this.$store.getters.status(client)
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        for(let provider of user.providerData){
          console.log(provider)
          let client = provider.providerId.split(".")[0]
          if(client!="password"){
            this.$store.commit('SET_STATUS', {client: client, status: true})
            this.$store.commit('SET_STATUS', {client: client, data: provider})
          }
        }
      }
    })
  }
}
</script>