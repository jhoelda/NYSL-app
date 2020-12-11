<template>
  <div class="about-NYSL">
    <b-card  v-for="(e,index) in datos" v-bind:key="index">
        <h2>{{e.title}}</h2>
        <b-card-text>{{e.info}}</b-card-text>
    </b-card >
  </div>
</template>

<script>
export default {
    name: 'AboutNYSL',
    props: {
        datos: Array
    }
}
</script>

<style lang="scss">
.about-NYSL{
    .card {
        background-color: white;
        border: 2px solid #66B032;
        margin-bottom: 30px !important;
    }
}
</style>