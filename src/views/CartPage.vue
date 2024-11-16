<template>  
<div class="thumb h-[300px]">
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
    <div class="p-10">
        <div>
            <table class="p-10">
            <tr class="bg-lightBink">
                <th class="p-5">Product</th>
                <th class="p-5">Price</th>
                <th class="p-5">Quantity</th>
                <th class="p-5">Subtotal</th>
            </tr>
                <tr v-for="item in cartItems" :key="item.id">
                    <td class="flex gap-2 ">
                        <img :src="item.thumbnail" :alt="item.title" class="w-[100px] h-[100px]">
                    <p class="text-sm content-center text-gray">{{ item.title }}</p>
                </td>
                    <td class="text-gray">$ {{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ item.count }}*{{ item.price }}</td>
                </tr>
            </table>
        </div>
        <div></div>
    </div>
</div>

  <FeatuersView/>
 <div>  {{ cartItems }}</div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
// import Features from "@/components/Features.vue";

const store = useStore();
const cartItems = computed(() => store.state.cartItems);

     onMounted(()=>{
        store.commit('getCart') 

     })

</script>
<script>
import FeatuersView from "@/components/Features.vue";
export default {
    components:{FeatuersView}
}
</script>
<style>

</style>