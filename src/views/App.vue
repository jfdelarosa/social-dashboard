<template lang="pug">
  div
    div(style="margin-bottom: 1rem")
      el-button(v-on:click="loginVisible = true") Social Login
      el-button(v-on:click="dialogVisible = true" v-if="providers.length > 0") Add Widget
      el-button(v-on:click="reset" v-if="layout.length > 0") Reset Layout
      el-button(v-on:click="update" v-if="layout.length > 0 && false") Update Data Sources
    el-dialog(title="Social Login" :visible.sync="loginVisible")
      el-row(:gutter="20")
        el-col(:span="12")
          strong(style="display: block; margin-bottom: 1rem;") Login
          div(v-for="app in notProviders" style="margin-bottom: 1rem")
            my-login(:type="app")
        el-col(:span="12")
          strong(style="display: block; margin-bottom: 1rem;") Logout
          div(v-for="app in providers" style="margin-bottom: 1rem")
            my-logout(:type="app.name")

    el-dialog(title="Add Widget" :visible.sync="dialogVisible")
      el-collapse(v-model="activeNames")
        el-collapse-item(v-for="(provider, key) in providers" :title="provider.name" :name="key + 1" style="margin-bottom: 1rem")
          //- pre(v-for="item in getComponents(provider.name)") {{item}}
          el-table(:data="getComponents(provider.name)")
            el-table-column(type="index" label="#")
            el-table-column(prop="name" label="Nombre" width="120")
            el-table-column(prop="desc" label="Descripción")
            el-table-column(label="Opciones" width="120")
              template(slot-scope="scope")
                el-button(v-on:click="addWidget(scope.row)" size="mini") Agregar
    div(v-if="!loading && layout.length")
      pre(v-for="item in layout") {{item}}
      grid-layout(v-if="dataReady" :layout.sync="layout" :row-height="90" :responsive="false" :use-css-transforms="false" @layout-updated="layoutUpdated")
        grid-item(v-for="(item, key) in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.id" :key="key")
          dynamic(:type="item.component" :network="item.network" v-loading="item.loading")
</template>
<script>

import {mapGetters} from 'vuex'
import firebase from '../firebase'
import myLogin from "../components/MyLogin.vue"
import myLogout from "../components/MyLogout.vue"
import Dynamic from "../components/Dynamic.vue"
import VueGridLayout from 'vue-grid-layout'

const db = firebase.firestore()

export default {
  components: {
    myLogin,
    myLogout,
    Dynamic,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  name: 'app',
  data(){
    return {
      dialogVisible: false,
      loginVisible: false,
      loading: false,
      user: null,
      dataReady: false,
      activeNames: [],
      componentList: [],
      // layout: [],
      apps: ["instagram", "google", "twitter", "facebook"],
      // componentList: {
      //   twitter: [
      //     {
      //       name: "Followers",
      //       desc: "Muestra el numero de followers",
      //       component: {
      //         component: "FollowersCount",
      //         network: "twitter",
      //         hidden: false,
      //         pinned: false,
      //         x: 0,
      //         y: 0,
      //         w: 2,
      //         h: 1
      //       }
      //     },
      //     {
      //       name: "Following",
      //       desc: "Muestra el numero de following",
      //       component: {
      //         component: "FollowingCount",
      //         network: "twitter",
      //         hidden: false,
      //         pinned: false,
      //         x: 0,
      //         y: 0,
      //         w: 2,
      //         h: 1
      //       }
      //     },
      //     {
      //       name: "Tweets",
      //       desc: "Muestra el numero de tweets",
      //       component: {
      //         component: "TweetsCount",
      //         network: "twitter",
      //         hidden: false,
      //         pinned: false,
      //         x: 0,
      //         y: 0,
      //         w: 2,
      //         h: 1
      //       }
      //     },
      //     {
      //       name: "Favoritos",
      //       desc: "Muestra el numero de tweets marcados como favorito",
      //       component: {
      //         component: "FavouritesCount",
      //         network: "twitter",
      //         hidden: false,
      //         pinned: false,
      //         x: 0,
      //         y: 0,
      //         w: 2,
      //         h: 1
      //       }
      //     }
      //   ]
      // }
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
    layout: {
      get(){
        return this.$store.getters.layout
      },
      set(val){
        let ret = this.copyObject(val)
        console.log("setter", ret)
        this.layout.push(ret)

        this.$store.dispatch('update_layout', this.layout)
      }
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
      // this.$store.commit('SET_LAYOUT', [])
      this.$store.dispatch('update_layout', [])
    },
    copyObject(obj){
      return JSON.parse(JSON.stringify(obj))
    },
    addWidget(component){
      this.layout = this.copyObject(component)
      // this.$store.dispatch('update_layout', this.layout)
      this.dialogVisible = false
    },
    update(){
      this.$store.dispatch('updateDataSource', {endpoint: "twitter/users", param: this.twitterUid})
    },
    layoutUpdated(layout){
      this.$store.dispatch('update_layout', layout)
    },
    getComponents(network){
      let ret = this.componentList.filter(item => {
        return item.network == network
      })
      return ret
    }
  },
  // firestore(){
  //   return {
  //     componentList: db.collection("components")
  //   }
  // },
  mounted(){
    this.$bind("componentList", db.collection("components")).then((doc) => {
      this.dataReady = true
      // console.log("doc", doc)
    })
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
.el-collapse{
  border-bottom: none;
}
</style>