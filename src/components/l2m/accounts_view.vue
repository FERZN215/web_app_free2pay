<template>
    <div>
        <table class="main">
            
            <th>
                Продавец

                <button class="sort" @click="this.$parent.sort('rat')">▲</button>
                <button class="sort" @click="this.$parent.sort('rev_rat')">▼</button>
            </th>
            <th class="lvl">
                Ур.

                <button class="sort" @click="this.sort('level')">▲</button>
                <button class="sort" @click="this.sort('rev_level')">▼</button>
            </th>
            <th >Описание</th>
            <th>
                Цена
            
                <button class="sort" @click="this.$parent.sort('up')">▲</button>
                <button class="sort" @click="this.$parent.sort('down')">▼</button>
            </th>
            
            
            <tr @click="this.$parent.choose(offer['_doc']._id)" v-for="offer in offers" :key="offer">
                <td class="name">{{offer["seller_name"]}} <br><p class="rating" style="margin:0px">✩{{ offer.rating }}% </p></td>
                <td class="level">{{ offer["_doc"]["level"] }}</td>
                <td class="description">{{ (offer["_doc"]["description"].length > 45) ? offer["_doc"]["description"].slice(0, 45)  : offer["_doc"]["description"]}}</td>
                <td class="cost">{{ offer["_doc"]["cost"] }}₽</td>
            </tr>
        </table>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    props:{
        offers:{
            type:Object,
            required:true
        }
    },
    methods:{
        level(a,b){
            return a["_doc"].level - b["_doc"].level;
        },
        rev_level(a,b){
            return b["_doc"].level - a["_doc"].level;
        },
        sort(type){
            switch (type) {
                case "level":
                    this.offers.sort(this.level)
                    break;
                case "rev_level":
                    this.offers.sort(this.rev_level)
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
button{
    color:var(--tg-theme-text-color);
    padding: 0px;
}
.level{
    
    text-align: center;
}
.description{
    width: 37%;
    word-break:break-all;
    height: auto;
    font-size: smaller;
}
.lvl{
    width: 53px;
}
</style>