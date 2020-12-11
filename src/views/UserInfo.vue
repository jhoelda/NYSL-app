<template>
    <div>
        <img id="user-photo" :src="user.photoURL">
        <h1>{{user.displayName}}</h1>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: 'user-info',
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style>
#user-photo{
    width: 100%;
    border-radius: 50%;
}
</style>