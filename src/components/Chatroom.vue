<template>
  <div id="chatroom">
          <h1>FORUM</h1>
      <template v-if="user==null">
          <router-link to="/user" tag="button">Login</router-link>
      </template>
      <template v-else>
          <div id="body">
              <div v-for="(message, index) in messages" :key="index" class="bubble">
                  <p>
                      <strong>{{message.author}} said:</strong>
                  </p>
                  <p>
                      {{message.body}}
                  </p>
              </div>
              <form @submit.prevent="post()" class="mensage-chat">
                  <input type="text" placeholder="Enter your message..." v-model="input" />
                  <button type="submit">Send</button>
              </form>
              
          </div>
      </template>

  </div>
</template>

<script>
import {mapState} from "vuex";
import {db} from "../firebase/db";
export default {
    name: 'chatroom',
    data(){
        return{
            messages:[],
            input:null
        }
    },
    methods: {
        post:function(){
            // console.log(this.input)
            let folder = db.ref("forum/match" + this.$route.params.id)
            let message = {
                body: this.input,
                author: this.user.displayName,
                date: new Date()
            }

            folder.push(message)
            this.input=null
        }
    },
    computed: {
        ...mapState(['user'])
    },
    mounted(){
        this.messages = [];
        db.ref("forum/match" + this.$route.params.id).on("child_added",(snapshot)=>{
            this.messages.push(snapshot.val())
        })

    }
}
</script>

<style>
.bubble{
    background-color:  #F0F7D4;
    margin-bottom: 15px;
    padding: 5px 30px ;
    border-radius: 15px;
}
.mensage-chat{
    position: fixed;
    bottom: 65px;
}

</style>