<template>
  <div id="app">
    <Nav />
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import {mapMutations} from "vuex"

export default {
  name: 'App',
  components: {
    Nav
  },
  methods:{
    ...mapMutations(['listenUser'])
  },
  beforeMount(){
    this.listenUser()
  }
}
</script>

<style lang="scss">
$color1: #092834;
$color2: #F0F7D4;
$color3: #66B032;
:root{
  color: black;
  background-image: url("assets/fondo1.png");
}
#app {
  padding: 80px 15%;
  height: 100%;
  background-image: url("assets/fondo1.png");
}
h1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.8em;
  color: $color2;
  background-color: $color3;
  border-radius: 15px;
  margin-bottom: 1rem !important;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
