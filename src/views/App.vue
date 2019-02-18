<template lang="pug">
  el-container
    el-main
      el-button(v-on:click="dialogVisible = true") Add Widget
      el-button(v-on:click="reset") Reset Layout
      el-dialog(title="Add Widget" :visible.sync="dialogVisible")
        el-collapse(v-model="activeNames" @change="handleChange")
          el-collapse-item(v-for="provider in providers" :title="provider.name" name="provider.name")
            div {{providers}}

      dnd-grid-container(:layout.sync="layout" :cellSize="cellSize" :maxColumnCount="maxColumnCount" :maxRowCount="maxRowCount" :margin="margin" :bubbleUp="bubbleUp")
        dnd-grid-box(v-for="(value, key) in layout" :boxId="value.id" :key="value.id")
          dynamic(:type="value.component" :network="value.network")
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import myLogin from "../components/MyLogin.vue"
import Dynamic from "../components/Dynamic.vue"
import { Container, Box } from '@dattn/dnd-grid'
import '@dattn/dnd-grid/dist/dnd-grid.css'

export default {
  components: {
    myLogin,
    Dynamic,
    DndGridContainer: Container,
    DndGridBox: Box
  },
  name: 'app',
  data(){
    return {
      dialogVisible: false,
      loading: false,
      apps: ["instagram", "google", "twitter", "facebook"],
      components: {
        twitter: [
          {
            name: "Followers"
            component: "FollowersCount"
          },
          {
            name: "Following"
            component: "FollowingCount"
          }
        ]
      },
      cellSize: {
        w: 120,
        h: 110
      },
      maxColumnCount: 10,
      maxRowCount: Infinity,
      bubbleUp: false,
      margin: 10
    }
  },
  computed: {
    providers(){
      let providers = this.$store.getters.clients.filter(prov => prov.conected)
      return providers
      console.log(providers)
    },
    layout: {
      get(){
        return this.$store.getters.layout
      },
      set(value){
        this.$store.commit('SET_LAYOUT', value)
      }
    }
  },
  methods: {
    status(client){
      return this.$store.getters.status(client)
    },
    reset(){
      this.$store.commit('SET_LAYOUT', [])
    },
    addWidget(){
      this.$store.commit('ADD_WIDGET', {
        id: Date.now(),
        component: "FollowingCount",
        network: "twitter",
        hidden: false,
        pinned: false,
        position: {
          x: 0,
          y: 0,
          w: 2,
          h: 1
        }
      })
    }
  },
  mounted(){
    // this.reset()
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        for(let provider of user.providerData){
          console.log(provider)
          let client = provider.providerId.split(".")[0]
          if(client!="password"){
            this.$store.commit('SET_STATUS', {client: client, status: true})
            this.$store.commit('SET_DATA', {client: client, provider: provider})
          }
        }
      }
    })
  }
}
</script>