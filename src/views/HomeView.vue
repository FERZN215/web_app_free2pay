<template>
  <div class="home" v-if="loaded">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="get_name">Close</button>
    <p>Nick {{nickname}}</p>
    <p>Params: {{ params }}</p>
    <div class = "offers">
      <div class="offer" v-for="offer in offers" :key="offer">
        <p>Cost: {{offer.cost }}</p>
      </div>

    </div>
  </div>
</template>
 
<script>
// @ is an alias to /src
  import serv from "../api/serv.js"
  const tg = window.Telegram.WebApp;
export default {
  name: 'HomeView',
  async mounted(){
    this.params = this.$route.query;

    this.nickname = tg?.initDataUnsafe?.user?.username;
    let resp = await serv.params(this.params);
    this.offers = resp.data;

    this.loaded = true;

   
  },
  data(){
    return{
      params:{},
      nickname:"",
      loaded:false,
      offers:[]
    }
  },

  methods:{
    get_name(){
      
      tg.close();
    }
  }


}
</script>
