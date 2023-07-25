<template>
    <div>
        <table class="main" >
                
            <th>
                Продавец

                <button class="sort" @click="this.$parent.sort('rat')">▲</button>
                <button class="sort" @click="this.$parent.sort('rev_rat')">▼</button>
            </th>
            <th class="count">
                Количество

                <button class="sort" @click="this.sort('cost')">▲</button>
                <button class="sort" @click="this.sort('rev_cost')">▼</button>
            </th>
            <th class="comission">
                Комиссия на

               
            </th>
            
            <th>
                Цена(ед.)
            
                <button class="sort" @click="this.$parent.sort('up')">▲</button>
                <button class="sort" @click="this.$parent.sort('down')">▼</button>
            </th>
                
                
            <tr  @click="this.$parent.choose(offer['_doc']._id)" v-for="offer in offers" :key="offer" >
                
                <td class="name">{{offer["seller_name"]}} <br><p class="rating" style="margin:0px">✩{{ offer.rating }}% </p></td>
                <td class="count">{{ offer["_doc"]["name"] }}</td>
                <td class="comission">{{  offer["_doc"]["comission"] == "comission_yes" ? "Продавце" : "Покупателе"}}</td>
                <td class="cost">{{ offer["_doc"]["cost"] }}₽</td>
                
            </tr>
        </table>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data(){
        return{
            sw:false
        }
    },
    props:{
        offers:{
            type:Array,
            required:true
        }
    },
    methods:{
        count(a,b){
            return a["_doc"].name - b["_doc"].name;
        },
        rev_count(a,b){
            return b["_doc"].name - a["_doc"].name;
        },
        sort(type){
            switch(type){
                case "cost":
                    this.offers.sort(this.count);
                    break;
                case "rev_cost":
                    this.offers.sort(this.rev_count);
                    break;
            }

        }
     
    }
    
}
</script>
<style >
    .count{
        font-size: 14px;
        font-style: normal; 
    }
    .comission{
        font-size: 14px;
        font-style: normal; 
    }
</style>