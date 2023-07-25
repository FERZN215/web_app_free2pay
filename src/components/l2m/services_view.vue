<template>
    <div>
        <button class="search_btn" @click="open()">{{!this.show ? "˅" : "˄"}}</button>
        <div v-if="show" class="search">
            <input class="search_inp" v-model="this.search" type="text" placeholder="Поиск по названию">
        </div>
        <table class="main" >
                
            <th>
                Продавец

                <button class="sort" @click="this.$parent.sort('rat')">▲</button>
                <button class="sort" @click="this.$parent.sort('rev_rat')">▼</button>
            </th> 
            <th class="naz">
                Название
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
            <tr  @click="this.$parent.choose(offer['_doc']._id)" v-for="offer in offers.filter(offer=>offer['_doc']['name'].toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))" :key="offer" >
                
                <td class="name">{{offer["seller_name"]}} <br><p class="rating" style="margin:0px">✩{{ offer.rating }}% </p></td>
                <td class="naz">{{ offer["_doc"]["name"] }}</td>
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
            search:""
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
     
    }
}
</script>
<style >
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
    width: 37%;
    word-break:break-all;
    height: auto;
    font-size: smaller;
}


</style>