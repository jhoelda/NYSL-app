<template>
    <div class="event">
    <b-card  v-for="(e,index) in datos" v-bind:key="index">
        <h3>{{e.date}}</h3>
        <b-card-text>{{e.info}}</b-card-text>
    </b-card >
    </div>
</template>

<script>
export default {
    name: 'Events',
    props: {
        datos: Array
    }
}
</script>

<style lang="scss">
.event{
    .card {
        background-color: white;
        border: 2px solid #66B032;
        margin-bottom: 30px !important;
    }
}
</style>