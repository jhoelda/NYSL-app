import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    listenUser(state){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.user = user
        } else {
          state.user = null
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
