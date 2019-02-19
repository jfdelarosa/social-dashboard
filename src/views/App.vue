<template lang="pug">
  el-container
    el-main
      div(style="margin-bottom: 1rem")
        el-button(v-on:click="dialogVisible = true") Add Widget
        el-button(v-on:click="reset") Reset Layout
      el-dialog(title="Add Widget" :visible.sync="dialogVisible")
        el-collapse(v-model="activeNames")
          el-collapse-item(v-for="(provider, key) in providers" :title="provider.name" :name="key + 1")
            el-table(:data="componentList[provider.name]")
              el-table-column(type="index" label="#")
              el-table-column(prop="name" label="Nombre" width="120")
              el-table-column(prop="desc" label="Descripción")
              el-table-column(label="Opciones" width="120")
                template(slot-scope="scope")
                  el-button(v-on:click="addWidget(scope.row.component)" size="mini") Agregar

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
      activeNames: [],
      apps: ["instagram", "google", "twitter", "facebook"],
      componentList: {
        twitter: [
          {
            name: "Followers",
            desc: "Muestra el numero de followers",
            component: {
              id: btoa(Math.random()).substring(0,12),
              component: "FollowersCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              position: {
                x: 0,
                y: 0,
                w: 2,
                h: 1
              }
            }
          },
          {
            name: "Following",
            desc: "Muestra el numero de following",
            component: {
              id: btoa(Math.random()).substring(0,12),
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
            }
          },
          {
            name: "Tweets",
            desc: "Muestra el numero de tweets",
            component: {
              id: btoa(Math.random()).substring(0,12),
              component: "TweetsCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              position: {
                x: 0,
                y: 0,
                w: 2,
                h: 1
              }
            }
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
      return this.$store.getters.clients.filter(prov => prov.conected)
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
    addWidget(component){
      this.$store.commit('ADD_WIDGET', component)
      this.dialogVisible = false
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