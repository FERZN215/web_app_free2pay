<template>
  <div class="home">
    <div class = "offers">
      <p>{{ this.nickname }}</p>
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
    this.loaded = true;
    this.params = this.$route.query;
    

    // this.data = tg.initDataUnsafe.user.username;
    console.log(tg.WebAppInitData)
    let resp = await serv.params(this.params);
    this.offers = resp.data;


    

   
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
    go_back(id){
      tg.sendData(JSON.stringify(id))

      console.log(id)
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
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left:  1px solid #ddd;;
}

tr:hover {
  background-color: #f5f5f5;
}

th {
  background-color: var(--tg-theme-secondary-bg-color);
  color: white;
}

.sort{
  background-color: #4caf4f00;
  border: none;
  color:white
}
.sort:hover{
  color:gray;
}

p{
  color:black;
}
</style>