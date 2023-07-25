<template>
    <div>
        <button  @click="closeL()" class="acc_cat"> {{ show==false && delay == false ? "ᐳ" : "ᐸ"}}</button>
        
        <transition name="slide">
            
            
            <div v-if="show==true" class="acc_cat_sort_div">
                
                <div class="sort_block">
                    <input v-model="this.orb" @change="filt(this.orb, 'account_orb')" type="checkbox" name="acc_cat" value="orb">
                    <label for="orb">Орб</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.posox"  @change="filt(this.posox, 'account_posox')"  type="checkbox" name="acc_cat" value="posox">
                    <label for="posox">Посох</label>
                </div>
                <div class="sort_block">
                    <input  v-model="this.kinj" @change="filt(this.kinj, 'account_kinj')"  type="checkbox" name="acc_cat" value="kinj">
                    <label for="kinj">Кинжал</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.luk" @change="filt(this.luk, 'account_luk')"   type="checkbox" name="acc_cat" value="luk">
                    <label for="luk">Лук</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.arbal"  @change="filt(this.arbal, 'account_arbal')"  type="checkbox" name="acc_cat" value="arbal">
                    <label for="arbal">Арбалет</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.dual"  @change="filt(this.dual, 'account_dual')"  type="checkbox" name="acc_cat" value="dual">
                    <label for="dual">Дуалы</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.shield" @change="filt(this.shield, 'account_shield')"   type="checkbox" name="acc_cat" value="shield">
                    <label for="shield">Щит</label>
                </div>
                <div class="sort_block">
                    <input v-model="this.glefa"  @change="filt(this.glefa, 'account_glefa')"  type="checkbox" name="acc_cat" value="glefa">
                    <label for="glefa">Глефа</label>
                </div>
                <div class="sort_block">
                    <input  v-model="this.d_sword" @change="filt(this.d_sword, 'account_double_sword')"  type="checkbox" name="acc_cat" value="d_sword">
                    <label for="d_sword">Двуручный меч</label>
                </div>
                <div class="sort_block">
                    <input  v-model="this.other" @change="filt(this.orb, 'other')"  type="checkbox" name="acc_cat" value="other">
                    <label for="other">Другое</label>
                </div>

                
            </div>
        </transition>
        <transition name="slide">
            <table v-if="show == false&& delay == false" class="main" >
                
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
                
                
                <tr  @click="this.$parent.choose(offer['_doc']._id)" v-for="offer in offers.filter((offer)=>this.accept.includes(offer['_doc']['class']))" :key="offer" >
                    
                    <td class="name">{{offer["seller_name"]}} <br><p class="rating" style="margin:0px">✩{{ offer.rating }}% </p></td>
                    <td class="level">{{ offer["_doc"]["level"] }}</td>
                    <td class="description">{{ (offer["_doc"]["description"].length > 45) ? offer["_doc"]["description"].slice(0, 45)  : offer["_doc"]["description"]}}</td>
                    <td class="cost">{{ offer["_doc"]["cost"] }}₽</td>
                    
                </tr>
            </table>
        </transition>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    data(){
        return{
            show:false,
            delay:false,
            orb:true,
            posox:true,
            kinj:true,
            luk:true,
            arbal:true,
            dual:true,
            shield:true,
            glefa:true,
            d_sword:true,
            other:true,
            accept: [
                'account_orb',
                'account_posox',
                'account_kinj',
                'account_luk',
                'account_arbal',
                'account_dual',
                'account_shield',
                'account_glefa',
                'account_double_sword',
                'other'
            ]

            

        }
    },
    props:{
        offers:{
            type:Array,
            required:true
        }
    },
    methods:{
        closeL(){
            this.show = !this.show;
            if(this.delay == true){
                setTimeout(()=>this.delay=false, 500)
            }
            else{
                this.delay = true;
            }
        },
   
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
        filt(n_b, acc_type){
            
          
            if(n_b == false && this.accept.includes(acc_type)){
                this.accept.splice(this.accept.findIndex(i=>i == acc_type),1);
            }
            else if(n_b == true && this.accept.includes(acc_type) == false){
                this.accept.push(acc_type);
            }
            else{
                alert("Вот че ты нахуевертил");
            }


            
        }
    }
}
</script>
<style >
button{
    color:var(--tg-theme-text-color);
    padding: 0px;
}
.level{

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; 
    text-align: center;
}
.description{
    width: 37%;
    word-break:break-all;
    height: auto;
    font-size: smaller;
}
.lvl{
    width: 47px;
}
.acc_cat{
    font-size: 12px;
    width: 100%;
    background-color: black;
    border: 1px;
    border-radius: 4px;
}
.acc_cat:hover{
    background-color: gray;
}



.sort_block{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: left;
    border-bottom: 1px solid var(--tg-theme-hint-color);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    vertical-align:middle;
    height: auto; 
    font-size: 14px;
    font-style: normal;
    
    background-color:var(--tg-theme-secondary-bg-color);
    
}

.sort_block input{

    float: right;
}
/* Animation */

.slide-enter-active {
  animation: slideInRight 0.5s;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-leave-active {
  animation: slideOutRight 0.5s;
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

</style>