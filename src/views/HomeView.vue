<template>
  <div class="home" style="width: 100%;">
    <div v-if="this.loaded" class = "offers" style="width: 100%;">
      <div v-if="this.params['game'] == 'game_lage2m'">
        <l2m_account :offers="this.offers"  v-if="this.params['pr_type'] == 'cat_accounts'"  />
      </div>

    </div>


    
  </div>
</template>
 
<script>
// @ is an alias to /src

  import serv from "../api/serv.js"
  const tg = window.Telegram.WebApp;

  import l2m_account from "../components/l2m/accounts_view.vue";
export default {
  name: 'HomeView',
  components:{
    l2m_account
  },
  async created(){
    tg.ready()
    tg.expand()
    
    this.params = this.$route.query;
    

    // this.data = tg.initDataUnsafe.user.username;
    console.log(tg.WebAppInitData)
    let resp = await serv.params(this.params);
    this.offers = resp.data;

    this.loaded = true;
    

   
  },
  data(){
    return{
      game:"",
      params:{},
      nickname:"",
      loaded:false,
      offers:[],
      data:{}
    }
  },

  methods:{
    choose(id){
      tg.sendData(JSON.stringify(id))
      tg.close();
    },
    rating(a,b){
      return a.rating - b.rating;
    },
    rev_rating(a,b){
      return b.rating - a.rating;
    },
    compare_by_cost(a,b){
      return a["_doc"].cost - b["_doc"].cost;
    },
    rev_compare_by_cost(a,b){
      return b["_doc"].cost - a["_doc"].cost;
    },
    close(){
      
      tg.close();
    },
    sort(type){
      switch (type) {
        case "up":
          this.offers.sort(this.compare_by_cost)
          break;
        case "down":
          this.offers.sort(this.rev_compare_by_cost)
          break;
        case "rat":
          this.offers.sort(this.rating)
          break;
        case "rev_rat":
          this.offers.sort(this.rev_rating)
          break;

        default:
          alert( "Error" );
          break
      }
    },
   

  }


}
</script>
<style>
table {
  background-color: var(--tg-theme-secondary-bg-color);
  color:var(--tg-theme-text-color);
  border-collapse: collapse;
  width: 100%;
}

th{
  padding: 3px;
  font-size: 12px; 
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* Ссылка на имгур
Орб,фиол карта, синий агатион,Lorem ipsum.... */

}
th, td {
  
  
  border-bottom: 1px solid var(--tg-theme-hint-color);
  
}

tr:hover {
  background-color: var(--tg-theme-bg-color);
}

th {
  
  color: var(--tg-theme-text-color);
}

.sort{
  background-color: #4caf4f00;
  border: none;
  color:var(--tg-theme-text-color)
}
.sort:hover{
  color:gray;
}
.name{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
}
.cost{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
}
.rating{
  font-size: smaller;
  color:var(--tg-theme-hint-color);
}

</style>