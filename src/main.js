import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCbfVtUJG05ewaDLfZSjTRjQnCPGD65WoM",
  authDomain: "nysl-app-b9384.firebaseapp.com",
  databaseURL: "https://nysl-app-b9384.firebaseio.com",
  projectId: "nysl-app-b9384",
  storageBucket: "nysl-app-b9384.appspot.com",
  messagingSenderId: "384455114170",
  appId: "1:384455114170:web:814fae8dc83ef302e1f183"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
