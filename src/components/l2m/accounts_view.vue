<template>
    <div>
        <table class="main">
            <tr>
            <th>
                Продавец

                <button class="sort" @click="this.$parent.sort('rat')">▲</button>
                <button class="sort" @click="this.$parent.sort('rev_rat')">▼</button>
            </th>
            <th>Описание</th>
            <th>
                Цена
            
                <button class="sort" @click="this.$parent.sort('up')">▲</button>
                <button class="sort" @click="this.$parent.sort('down')">▼</button>
            </th>
            
            </tr>
            <tr @click="this.$parent.go_back(offer['_doc']._id)" v-for="offer in offers" :key="offer">
            <td class="name">{{offer["seller_name"]}} <br>{{ offer.rating }} </td><td class ="description">{{ offer["_doc"]["description"] }}</td><td class="cost">{{ offer["_doc"]["cost"] }}</td>
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
    }
}
</script>
<style>
    
</style>