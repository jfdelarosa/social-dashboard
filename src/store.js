import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    layout: []
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.clients.filter(prov => { return prov.name == payload.client })[0].loading = payload.status
    },
    SET_STATUS: (state, payload) => {
      state.clients.filter(prov => { return prov.name == payload.client })[0].conected = payload.status
    },
    SET_DATA: (state, payload) => {
      state.clients.filter(prov => { return prov.name == payload.client })[0].provider = payload.provider
    },
    SET_LAYOUT: (state, payload) => {
      state.layout = payload
    },
    ADD_WIDGET: (state, payload) => {
      state.layout.push(payload)
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
    }
  },
  plugins: [createPersistedState()]
})
