<template>
  <div class="home">
    <h1>HOME</h1>
    <div class="title">
      <h2>Upcoming Events</h2>
    </div>
    <Events :datos="event"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Events from '@/components/Events.vue'

export default {
  name: 'Home',
  components: {
    Events
  },
  data: function() {
    return{
      event:[
        {
          date: "August 4",
          info: "NYSL Fundraiser."
        },
        {
          date: "August 16",
          info: "Season Kick-off: Meet the Teams."
        },
        {
          date: "September 1",
          info: "First Game of the Season (Check Game Schedule for details)."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    height: 10em;
    width: 100%;
    background-image: url("../assets/img4.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 25px;
    position: relative;
    display: flex;
    justify-content: center;
    h2 {
      height: 1.5em;
      background-color: rgba(255, 255, 255, 0.8);
      position: absolute;
      bottom: 0;
      border-radius: 10px;
    }
  }
}
</style>