<template>
  <div>
  <tamplate v-if="!landscape">
    <b-navbar variant="color1" fixed="bottom">
    <router-link to="/" class = "h3 mb-2"><b-icon icon="house-door" variant="color2"></b-icon></router-link>
    <router-link to="/about" class = "h3 mb-2"><b-icon icon="info-circle" variant="color2"></b-icon></router-link>
    <router-link to="/calendar" class = "h3 mb-2"><b-icon icon="calendar3" variant="color2"></b-icon></router-link>
    <router-link to="/user" class = "h3 mb-2"><b-icon icon="person-circle" variant="color2"></b-icon></router-link>
    </b-navbar>
  </tamplate>

  <tamplate v-else>
    <div class="rotate">
      <router-link to="/" class = "h3 mb-2"><b-icon icon="house-door" variant="color2"></b-icon></router-link>
      <router-link to="/about" class = "h3 mb-2"><b-icon icon="info-circle" variant="color2"></b-icon></router-link>
      <router-link to="/calendar" class = "h3 mb-2"><b-icon icon="calendar3" variant="color2"></b-icon></router-link>
      <router-link to="/user" class = "h3 mb-2"><b-icon icon="person-circle" variant="color2"></b-icon></router-link>
    </div>
    
  </tamplate>
  

  <b-navbar variant="color1" fixed="top" class = "h3 mb-2">
  <img src="../assets/nysl_logo.png" alt="logo" id="logo">
    <b-navbar-brand href="/" id="nysl"><h3><strong>NYSL</strong></h3></b-navbar-brand>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'navbar',
    data: function(){
      return{
        landscape: window.matchMedia("(min-width: 600px)").matches
      }
    },
    beforeMount(){
        window.addEventListener('resize', ()=> this.landscape = window.matchMedia("(min-width: 600px)").matches)
      }
}
</script>

<style lang="scss">
    .bg-color1{
        background-color: #092834 !important;
    }
    .text-color2 {
        color: #F0F7D4 !important;
    }
    .navbar {
        justify-content: space-evenly !important;
        
    &.router-link-exact-active {
      i{
      background-color: rgba(32, 86, 158, 0.829) !important;}
    }
    }

    .rotate{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
      padding-top: 50px;
      width: 60px;
      height: 100%;
      background-color: #092834;

    }


    #logo {
        position: fixed;
        width: 50px;
        left: 10px;
        top: 8px;
    }
    #nysl {
        color:#F0F7D4;
        margin: 0;
    }
    
</style>