<template>  
<div class="thumb h-[300px] content-center">
    <div>
      <div class="content-center">
        <h3 class="text-[48px] font-medium">Cart</h3>
        <div class="text-[16px]">
          <a href="/" class="font-medium">Home</a> >
          <a href="#" class="">Cart</a> 
        </div>
      </div>
    </div>
  </div>



<div>
    <div class="p-10 grid md:grid-cols-3  gap-4">
        <!---------CartItems ------->
        <div class="col-span-2">
            <table class="p-10 w-full">
            <tr class="bg-[#F9F1E7]">
                <th class="p-3">Product</th>
                <th class="p-3">Price</th>
                <th class="p-3">Quantity</th>
                <th class="p-3">Subtotal</th>
                <th class="p-3"></th>
            </tr>
            <tr>
              <div v-if="cartItems.length==0"  class="text-left m-20">
             <h3 class="font-bold">Your cart is empty.... </h3>
              <router-link :to="{ name: 'shopPage' }" class="underline hover:text-primary-color ">go for shopping</router-link>
              </div>
</tr>
                <tr v-for="item in cartItems" :key="item.id">
                    <td class="md:flex gap-2 ">
                        <img :src="item.thumbnail" :alt="item.title" class="w-[100px] h-[100px]">
                    <router-link :to="'/shop/'+item.id" class="text-sm content-center text-gray">{{ item.title }}</router-link>
                    </td>
                    <td class="text-gray ">$ {{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td>$ {{ Math.ceil(item.count * item.price) }}</td>
                    <td><svg @click="store.commit('delCartItem',item.id)" class="hover:cursor-pointer w-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#B88E2F" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></td>
                </tr>
            </table>
        </div>

        <!------- Cart Total------->
        <div>
            <div class=" px-10 md:px-16  pt-10 pb-20px bg-[#F9F1E7]">
                <h3 class="font-semibold text-[32px] ">Cart Totals</h3>

                <div class="text-start flex justify-between mt-16 ">
                <p class="font-medium">Subtotal</p>
                <p> $ {{ total}}</p>
                </div>
                <div class="text-start flex justify-between mt-7">
                <p class="font-medium">Total</p>
                <p class="text-[20px] text-primary-color"> $ {{ total}}</p>
                </div>

                <button  class="mt-7 mb-16 border rounded-lg px-7 py-3 text-[20px] hover:bg-primary-color hover:text-white">Check Out</button>
            </div>
        </div>
    </div>
</div>

  <FeatuersView/>
  <SearchView/>

</template>

<script setup>
import SearchView from "@/components/SearchIcon.vue";
import FeatuersView from "@/components/Features.vue";

import { useStore } from "vuex";
import { computed, onMounted} from "vue";

const store = useStore();
const cartItems = computed(() => store.state.cartItems);
// let total=ref(0);
const total=computed(()=>cartItems.value.reduce((sum,item)=>sum+ Math.ceil(item.count*item.price),0)
)

// let handleTotalPrice=()=>{
//            cartItems.value.forEach(item => {
//             total.value+= Math.ceil(item.count * item.price)
//            });
// return total.value
         
// }

     onMounted(()=>{
        store.commit('getCart') 
        // handleTotalPrice()
       
     })

</script>

<style>

</style>