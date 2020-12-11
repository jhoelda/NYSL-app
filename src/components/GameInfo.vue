<template>
    <div class="gameInfo">
    <article v-for="(e,index) in datos" v-bind:key="index">
        <h4 class="title-date">{{e.date}}</h4>
        <div class="vs">
            <p class="circle"><strong>{{e.team1}}</strong></p>
            <p>vs.</p>
            <p class="circle"><strong>{{e.team2}}</strong></p>
        </div>
        <div class="info">
            <!-- style="display: none" -->
            <ul>
                <li><strong>Time:</strong> {{e.time}}</li>
                <li><strong>Location:</strong> {{e.location}}</li>
                <li>{{e.location1}}</li>
            </ul>
        </div>
        <div class="chat">
            <router-link :to="'/chatroom/' + index" class = "h3 mb-2"><b-icon icon="chat-right-text" variant="color1"></b-icon></router-link>
        </div>
    </article>
    </div>
</template>

<script>
export default {
    name: 'GameInfo',
    props: {
        datos: Array
    }
}
</script>

<style lang="scss">
.gameInfo{
    article {
        background-color:  #F0F7D4;
        margin-bottom: 30px !important;
        padding: 0px ;
        border-radius: 15px;
        h4 {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #092834;
            color: #F0F7D4;
        };
        .vs {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            .circle {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 3em;
                height: 3em;
                background-color: #66B032;
                border-radius: 50%;
            }
        };
        .info {
            ul {
            list-style: none;
            }
        }
        .chat {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #F0F7D4;
        }
    };
    
}
.text-color1{
        color: #092834 !important;
    }
</style>