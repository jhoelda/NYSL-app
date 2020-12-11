<template>
<div class="calendar">
    <h1>GAME INFO</h1>
    <GameInfo :datos="game"/>
</div>
</template>

<script>
import GameInfo from '@/components/GameInfo.vue'
export default {
    name: 'calendar',
    components: {
        GameInfo
    },
    data: function(){
        return{
            game:[
                {
                 date: "9/01",
                 team1: "U1",
                 team2: "U4",
                 location: "AJ Katzenmaier",
                 location1: "24 W. Walton St., Chicago, IL 60610",
                 maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110988!2d-87.63123908406489!3d41.90029237922039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1594829022722!5m2!1ses!2sar",
                 time: "9:30 a.m."                 
                },
                {
                 date: "9/01",
                 team1: "U3",
                 team2: "U2",
                 location: "Greenbay",
                 location1: "1734 N. Orleans St., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "9/08",
                 team1: "U5",
                 team2: "U6",
                 location: "Howard A Yeager",
                 location1: "2245 N. Southport Ave., Chicago, IL 60614",
                 time: "9:30 a.m."                 
                },
                {
                 date: "9/08",
                 team1: "U6",
                 team2: "U1",
                 location: "Marjorie P Hart",
                 location1: "2625 N. Orchard St., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "9/15",
                 team1: "U2",
                 team2: "U4",
                 location: "North",
                 location1: "1409 N. Ogden Ave., Chicago, IL 60610",
                 time: "9:30 a.m."                 
                },
                {
                 date: "9/15",
                 team1: "U3",
                 team2: "U5",
                 location: "AJ Katzenmaier",
                 location1: "24 W. Walton St., Chicago, IL 60610",
                 time: "1:00 p.m."                 
                },
                {
                 date: "9/22",
                 team1: "U1",
                 team2: "U3",
                 location: "South",
                 location1: "2101 N. Fremont St., Chicago, IL 60614",
                 time: "9:30 a.m."                 
                },
                {
                 date: "9/22",
                 team1: "U2",
                 team2: "U6",
                 location: "Howard A Yeager",
                 location1: "2245 N. Southport Ave., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "9/29",
                 team1: "U4",
                 team2: "U5",
                 location: "Greenbay",
                 location1: "1734 N. Orleans St., Chicago, IL 60614",
                 time: "9:30 a.m."                 
                },
                {
                 date: "10/06",
                 team1: "U2",
                 team2: "U2",
                 location: "Marjorie P Hart",
                 location1: "2625 N. Orchard St., Chicago, IL 60614",
                 time: "9:30 a.m."                 
                },
                {
                 date: "10/06",
                 team1: "U1",
                 team2: "U6",
                 location: "South",
                 location1: "2101 N. Fremont St., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "10/13",
                 team1: "U3",
                 team2: "U4",
                 location: "Howard A Yeager",
                 location1: "2245 N. Southport Ave., Chicago, IL 60614",
                 time: "9:30 a.m."                 
                },
                {
                 date: "10/13",
                 team1: "U5",
                 team2: "U1",
                 location: "Greenbay",
                 location1: "1734 N. Orleans St., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "10/20",
                 team1: "U6",
                 team2: "U3",
                 location: "North",
                 location1: "1409 N. Ogden Ave., Chicago, IL 60610",
                 time: "9:30 a.m."                 
                },
                {
                 date: "10/20",
                 team1: "U2",
                 team2: "U4",
                 location: "Marjorie P Hart",
                 location1: "2625 N. Orchard St., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },
                {
                 date: "10/27",
                 team1: "U3",
                 team2: "U1",
                 location: "AJ Katzenmaier",
                 location1: "24 W. Walton St., Chicago, IL 60610",
                 time: "9:30 a.m."                 
                },
                {
                 date: "10/27",
                 team1: "U5",
                 team2: "U6",
                 location: "Howard A Yeager",
                 location1: "2245 N. Southport Ave., Chicago, IL 60614",
                 time: "1:00 p.m."                 
                },

            ]
        }
    }
}
</script>

<style>
.calendar{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>