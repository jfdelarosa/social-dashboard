import Vue from 'vue'
import Vuex from 'vuex'
import ax from "axios"

let axios = ax.create({
  baseURL: (process.env.NODE_ENV=="development" ? "http://localhost:8888/social-api/" : "https://jf-social-api.herokuapp.com/")
})

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
    dataSources: [],
    layout: []
  },
  mutations: {
    SET_LOADING(state, payload){
      state.clients.filter(prov => { return prov.name == payload.client })[0].loading = payload.status
    },
    SET_STATUS(state, payload){
      state.clients.filter(prov => { return prov.name == payload.client })[0].conected = payload.status
    },
    SET_DATA(state, payload){
      state.clients.filter(prov => { return prov.name == payload.client })[0].provider = payload.provider
    },
    SET_LAYOUT(state, payload){
      state.layout = payload
    },
    ADD_WIDGET(state, payload){
      state.layout.push(payload)
    },
    pushDataSource(state, payload){
      axios.get(payload.endpoint + "/" + payload.param)
      .then((res) => {
        console.log("Api call from: " + payload.endpoint)
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
      axios.get(payload.endpoint + "/" + payload.param)
      .then((res) => {
        console.log("Api update: " + payload.endpoint)
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
      if(getters.getSource(payload.endpoint).length == 1){
        commit("updateDataSource", payload)
      }
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
    getSource: (state) => (endpoint) => {
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
