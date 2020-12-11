<template>
  <div class="about">
    <h1>ABOUT NYSL</h1>
    <AboutNYSL :datos="nyslInfo"/>
  </div>
</template>

<script>
import AboutNYSL from '@/components/AboutNYSL.vue'

export default {
  name: 'About',
  components: {
    AboutNYSL  
  },
  data: function() {
    return{
      nyslInfo:[
        {
          title: "Mission",
          info: "To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship."
        },
        {
          title: "Vision",
          info: "The Northside Youth Soccer League ospreys to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership."
        },
        {
          title: "General Information",
          info: "The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood NYSL is ran by a small ful-time staff, and release on the generous volunteer time of parents and previous league members."
        }
      ]
    }
  }
}

</script>

<style>
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 70px 0; */
  /* padding: 50px 15%; */
}
</style>
