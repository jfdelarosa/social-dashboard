import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients: {
      instagram: {
        conected: false,
        loading: false,
        data: {}
      },
      google: {
        conected: false,
        loading: false,
        data: {}
      },
      twitter: {
        conected: false,
        loading: false,
        data: {}
      },
      facebook: {
        conected: false,
        loading: false,
        data: {}
      }
    }
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.clients[payload.client].loading = payload.status
    },
    SET_STATUS: (state, payload) => {
      state.clients[payload.client].conected = payload.status
    },
    SET_DATA: (state, payload) => {
      state.clients[payload.client].data = payload.data
    }
  },
  getters: {
    loading: (state) => (client) => {
      return state.clients[client].loading
    },
    status: (state) => (client) => {
      return state.clients[client].conected
    },
    status: (state) => (client) => {
      return state.clients[client].data
    }
  }
})
