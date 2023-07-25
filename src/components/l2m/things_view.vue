<template>
    <div>
        <button class="search_btn" @click="open()">{{!this.show ? "˅" : "˄"}}</button>
        <div v-if="show" class="search">
            <div>
                <div class="sort_block">
                    <input @change="category('things_weapon')" type="checkbox" value="weapon" checked>
                    <label for="weapon">Оружие</label>
                </div>
                <div class="sort_block">
                    <input @change="category('things_armor')" type="checkbox" value="armor" checked>
                    <label for="armor">Броня</label>
                </div>
                <div class="sort_block">
                    <input @change="category('things_accessories')" type="checkbox" value="accessories" checked>
                    <label for="accessories">Аксессуары</label>
                </div>
                <div class="sort_block">
                    <input @change="category('things_other')" type="checkbox" value="other" checked>
                    <label for="other">Прочее</label>
                </div>
            </div>
            <input class="search_inp" v-model="this.search" type="text" placeholder="Поиск по названию">
        </div>
        <table class="main" >
                
            <th>
                Продавец

                <button class="sort" @click="this.$parent.sort('rat')">▲</button>
                <button class="sort" @click="this.$parent.sort('rev_rat')">▼</button>
            </th> 
            <th class="category">
                Категория
            </th>
            <th class="description">
                Описание  
            </th>
                
            <th>
                Цена
                <button class="sort" @click="this.$parent.sort('up')">▲</button>
                <button class="sort" @click="this.$parent.sort('down')">▼</button>
            </th>
                
            <!-- eslint-disable -->
            <tr  @click="this.$parent.choose(offer['_doc']._id)" v-for="offer in offers.filter(offer=>offer['_doc']['description'].toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) && this.access.includes(offer['_doc']['type']))" :key="offer" >
                
                <td class="name">{{offer["seller_name"]}} <br><p class="rating" style="margin:0px">✩{{ offer.rating }}% </p></td>
                <td class="category">{{ type_converter(offer["_doc"]["type"]) }}</td>
                <td class="description">{{ (offer["_doc"]["description"].length > 45) ? offer["_doc"]["description"].slice(0, 45)  : offer["_doc"]["description"]}}</td>
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
            show:false,
            search:"",
            access:["things_weapon", "things_armor", "things_accessories", "things_other"]
        }
    },
    props:{
        offers:{
            type:Array,
            required:true
        }
    },
    methods:{
      
        open(){
            this.show = !this.show
            if(!this.show){
                this.search = "";
            }
        },
        category(cat){
            if (this.access.includes(cat)) {
                this.access.splice(this.access.findIndex(i=>i == cat),1);
            }
            else{
                this.access.push(cat);
            }
        },
        type_converter(type){
            switch(type){
                case "things_weapon":
                    return "Оружие";
                    break;
                case "things_armor":
                    return "Броня";
                    break;
                case "things_accessories":
                    return "Аксессуары";
                    break;
                case "things_other":
                    return "Прочее";
                    break;
            }
        }
     
    }
}
</script>
<style>
.search_btn{
    font-size: 12px;
    width: 100%;
    background-color: black;
    border: 1px;
    border-radius: 4px;
}
.search_btn:hover{
    background-color: gray;
}
.description{
    width: 32%;
    word-break:break-all;
    height: auto;
    font-size: smaller;
}
.category{
    font-weight: normal;
    font-size: smaller;
}
.search_inp{
    background-color: transparent;
    border: none;
    margin: 10px;
    text-align: center;
    border: 1px solid var(--tg-theme-hint-color);
    border-radius: 8px;
}
.search_inp:focus{
   outline: none;
   border: 1px solid var(--tg-theme-text-color);
}

</style>