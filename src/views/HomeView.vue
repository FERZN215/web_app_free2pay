<template>
  <div class="home" v-if="loaded">
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
  name: 'HomeView',
  mounted(){
    this.params = this.$route.query['id'];
    this.nickname = tg.initDataUnsafe.user.username;
    this.loaded = true;
    
  },
  data(){
    return{
      nickname:"",
      params:"",
      loaded:false
    }
  },

  methods:{
    get_name(){
      
      tg.close();
    }
  }


}
</script>
