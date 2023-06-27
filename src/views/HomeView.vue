<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="get_name">Close</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return{
      smth:0
    }
  },
  methods:{
    get_name(){
      const tg = window.Telegram.WebApp;
      tg.close();
    }
  }


}
</script>
