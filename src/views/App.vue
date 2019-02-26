<template lang="pug">
  div
    div(style="margin-bottom: 1rem")
      el-button(v-on:click="dialogVisible = true") Add Widget
      el-button(v-on:click="reset" v-if="layout.length > 0") Reset Layout
      el-button(v-on:click="update" v-if="layout.length > 0") Update Data Sources
    el-dialog(title="Add Widget" :visible.sync="dialogVisible")
      el-collapse(v-model="activeNames")
        div(v-for="app in notProviders" style="margin-bottom: 1rem")
          my-login(:type="app")
        hr(style="margin-bottom: 0")
        el-collapse-item(v-for="(provider, key) in providers" :title="provider.name" :name="key + 1" style="margin-bottom: 1rem")
          el-table(:data="componentList[provider.name]")
            el-table-column(type="index" label="#")
            el-table-column(prop="name" label="Nombre" width="120")
            el-table-column(prop="desc" label="Descripción")
            el-table-column(label="Opciones" width="120")
              template(slot-scope="scope")
                el-button(v-on:click="addWidget(scope.row.component)" size="mini") Agregar
    div(v-if="!loading && layout.length > 0")
      grid-layout(:layout.sync="layout" :row-height="90" :responsive="false" :use-css-transforms="false" @layout-updated="layoutUpdated")
        grid-item(v-for="(item, key) in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="key")
          dynamic(:type="item.component" :network="item.network")
</template>
<script>

import {mapGetters} from 'vuex'
import firebase from '../firebase'
import myLogin from "../components/MyLogin.vue"
import Dynamic from "../components/Dynamic.vue"
import VueGridLayout from 'vue-grid-layout'

const db = firebase.firestore()

export default {
  components: {
    myLogin,
    Dynamic,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  name: 'app',
  data(){
    return {
      dialogVisible: false,
      loading: false,
      user: null,
      activeNames: [],
      // layout: [],
      apps: ["instagram", "google", "twitter", "facebook"],
      componentList: {
        twitter: [
          {
            name: "Followers",
            desc: "Muestra el numero de followers",
            component: {
              component: "FollowersCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              x: 0,
              y: 0,
              w: 2,
              h: 1
            }
          },
          {
            name: "Following",
            desc: "Muestra el numero de following",
            component: {
              component: "FollowingCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              x: 0,
              y: 0,
              w: 2,
              h: 1
            }
          },
          {
            name: "Tweets",
            desc: "Muestra el numero de tweets",
            component: {
              component: "TweetsCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              x: 0,
              y: 0,
              w: 2,
              h: 1
            }
          },
          {
            name: "Favoritos",
            desc: "Muestra el numero de tweets marcados como favorito",
            component: {
              component: "FavouritesCount",
              network: "twitter",
              hidden: false,
              pinned: false,
              x: 0,
              y: 0,
              w: 2,
              h: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      notProviders: "notProviders",
      providers: "providers"
    }),
    twitterUid(){
      return this.$store.getters.provider("twitter").uid
    },
    layout(){
      return this.$store.getters.layout
    }
  },
  methods: {
    admin(){
      this.$router.push({name: "admin"})
    },
    status(client){
      return this.$store.getters.status(client)
    },
    reset(){
      this.$store.commit('SET_LAYOUT', [])
    },
    addWidget(component){
      component.i = btoa(Math.random()).substring(0,12)
      this.layout.push(component)
      this.$store.dispatch('update_layout', this.layout)
      this.dialogVisible = false
    },
    update(){
      this.$store.dispatch('updateDataSource', {endpoint: "twitter/users", param: this.twitterUid})
    },
    layoutUpdated(layout){
      this.$store.dispatch('update_layout', layout)
    }
  }
}
</script>

<style scoped>
.vue-grid-layout{
  margin: -10px;
}
.vue-resizable-handle{
  bottom: -2px!important;
}
</style>