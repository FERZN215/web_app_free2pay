<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="get_name">Close</button>
    <p>{{nickname}}</p>
    <p>Params: {{ params }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
  
  const tg = window.Telegram.WebApp;
export default {
  
  beforeCreate(){
    this.params = this.$route.query['id'];
    this.nickname = tg.initDataUnsafe.user.username;
    
  },
  name: 'HomeView',
  data(){
    return{
      nickname:"",
      params:""
    }
  },

  methods:{
    get_name(){
      
      tg.close();
    }
  }


}
</script>
