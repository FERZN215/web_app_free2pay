<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="get_name">Close</button>
    <p>{{nickname}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
  import { onMounted } from 'vue'
  const tg = window.Telegram.WebApp;
  onMounted(() => {
    this.nickname = tg.initDataUnsafe.user.username;
    console.log(`the component is now mounted.`)
  })
export default {
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
