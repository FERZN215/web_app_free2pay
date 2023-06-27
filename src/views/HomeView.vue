<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="get_name">Close</button>
    <p>{{nickname}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
  
  const tg = window.Telegram.WebApp;
export default {
  
  mounted(){
    this.nickname = tg.initDataUnsafe.user.username;
    console.log(`the component is now mounted.`)
  },
  name: 'HomeView',
  data(){
    return{
      nickname:""
    }
  },

  methods:{
    get_name(){
      
      tg.close();
    }
  }


}
</script>
