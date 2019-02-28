import Vue from 'vue'
import Vuex from 'vuex'
import ax from "axios"
import firebase from './firebase'

let axios = ax.create({
  baseURL: (process.env.NODE_ENV=="development" ? "http://localhost:8888/social-api/" : "https://jf-social-api.herokuapp.com/")
})

Vue.use(Vuex)

const db = firebase.firestore()

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    conected: [],
    clients: [
      {
        name: "instagram",
        conected: false,
        loading: false,
        provider: {}
      },
      {
        name: "google",
        conected: false,
        loading: false,
        provider: {}
      },
      {
        name: "twitter",
        conected: false,
        loading: false,
        provider: {}
      },
      {
        name: "facebook",
        conected: false,
        loading: false,
        provider: {}
      }
    ],
    dataSources: [],
    layout: []
  },
  mutations: {
    SET_LOADING(state, payload){
      Vue.set(state.clients.filter(prov => { return prov.name == payload.client })[0], "loading", payload.status)
    },
    SET_STATUS(state, payload){
      Vue.set(state.clients.filter(prov => { return prov.name == payload.client })[0], "conected", payload.status)
    },
    SET_DATA(state, payload){
      Vue.set(state.clients.filter(prov => { return prov.name == payload.client })[0], "provider", payload.provider)
    },
    SET_LAYOUT(state, payload){
      state.layout = payload
    },
    PUSH_LAYOUT(state, payload){
      state.layout.push(payload)
    },
    // ADD_WIDGET(state, payload){
    //   state.layout.push(payload)
    // },
    SET_USER(state, payload){
      state.user = payload
    },
    SET_LOADING(state, payload){
      state.loading = payload
    },
    pushDataSource(state, payload){
      console.time("Api call from: " + payload.endpoint)
      axios.get(payload.endpoint + "/" + payload.param)
      .then((res) => {
        console.timeEnd("Api call from: " + payload.endpoint)
        state.dataSources.push({
          endpoint: payload.endpoint,
          data: res.data
        });
      })
      .catch((e) => {
        console.log(e);
      });
    },
    updateDataSource(state, payload){
      console.time("Api update: " + payload.endpoint)
      axios.get(payload.endpoint + "/" + payload.param)
      .then((res) => {
        console.timeEnd("Api update: " + payload.endpoint)
        for(let i = 0; i < state.dataSources.length; i++){
          let el = state.dataSources[i];
          if(el.endpoint == payload.endpoint){
            console.log("Updated!")
            state.dataSources[i].data = res.data
            break;
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
  },
  actions: {
    clearDataSource({commit, state}){
      state.dataSources = []
    },
    addDataSource({commit, state, getters}, payload){
      if(getters.getSource(payload.endpoint).length == 0){
        commit("pushDataSource", payload)
      }
    },
    updateDataSource({commit, state, getters}, payload){
      console.log("asadadsasdsaads")
      if(getters.getSource(payload.endpoint).length > 0){
        commit("updateDataSource", payload)
      }
    },
    update_layout({commit, state, getters}, payload){
      console.log("update layouts")
      db.collection('layouts').doc(getters.user.uid).update({
        layout: payload,
        updated: new Date()
      })
      commit("SET_LAYOUT", payload)
    }
  },
  getters: {
    loading: (state) => (client) => {
      return state.clients.filter(prov => { return prov.name == client })[0].loading
    },
    status: (state) => (client) => {
      return state.clients.filter(prov => { return prov.name == client })[0].conected
    },
    provider: (state) => (client) => {
      return state.clients.filter(prov => { return prov.name == client })[0].provider
    },
    layout(state){
      return state.layout
    },
    clients(state){
      return state.clients
    },
    user(state){
      return state.user
    },
    is_loading(state){
      return state.loading
    },
    providers(state){
      return state.clients.filter(prov => prov.conected)
    },
    notProviders(state){
      return state.clients.filter(prov => !prov.conected).map(item => item.name)
    },
    getSource: (state) => (endpoint) => {
      console.log(state.dataSources, endpoint)
      return state.dataSources.filter(prov => {return prov.endpoint == endpoint})
    },
    dataSource: (state, getters) => (endpoint) => {
      let source = getters.getSource(endpoint)
      if(source.length == 0){
        return 0
      }else{
        return source[0].data
      }
    }
  }
})
