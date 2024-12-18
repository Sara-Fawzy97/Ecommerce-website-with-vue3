<template>
  <!-- <p>Category is {{ categProducts }} </p> -->
  <!-- <div v-for="categProduct in categProducts" :key="id"> </div> -->

   <div
      class="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 px-2"
    >

    <!----the over background------>
      <div class="card  mb-6 relative" v-for="categProduct in categProducts" :key="categProduct.id">
       
        <img :src="categProduct.thumbnail" alt="product.title" />
        <div class="description px-2 pt-2 pb-7 text-start">
          <h5
            class="dark-gray text-[16px] md:text-[22px] lg:text-[24px] font-semibold"
          >
            {{ categProduct.title }}
          </h5>
          <p class="font-medium text-[10px] md:text-base text-[#898989]">
            {{ categProduct.description.substring(0, 40) }} ...
          </p>
          <span class="dark-gray font-semibold text-[14px] md:text-[20px]">
            {{ categProduct.price }} $</span
          >
        </div>

        <div class="  rounded overCard bg-[#3A3A3A]/70 w-full h-full absolute top-0 content-center opacity-0">
          
          <router-link :to="'/shop/'+categProduct.id" class="text-primary-color hover:bg-white py-2 px-7 border-solid border-primary-color border-2" >View</router-link><br>

          <button  @click="addToCart(categProduct)" class="bg-white text-primary-color py-2 px-7 mt-5">Add To Cart</button>
        </div>
      </div>
    </div>
  
</template>

<script setup>

import { computed, onMounted} from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

const store = useStore();
const categProducts = computed(() => store.state.category);
const route = useRouter();

 onMounted(()=>{
   const p=route.currentRoute.value.params.category
console.log(p)
    store.dispatch("getCategoryProducts",p);

 })
</script>

<style>

</style>