<template>
<div class="bg-lightBink">
   <div class="text-start py-5 px-7 md:px-16">
      <div class=" text-[12px] md:text-base inline-flex gap-2">
          <router-link to="/" class="font-medium text-gray"> Home </router-link> >
          <router-link to="/shop" class="text-gray"> Shop  </router-link> >  |
          <p>{{ SingleProduct.title }}</p>
        </div>
   </div>
</div>

<div >
<div  class="grid md:grid-cols-2 pt-7 px-10 gap-10 md:gap-20">

   <!------- product images------->
<div class=" lg:flex lg:flex-row-reverse">
   <img :src=" SingleProduct.thumbnail " :alt="SingleProduct.title" class="w-[480px] h-[390px]">

   <div>
      <div v-for="img in SingleProduct.images" :key="img.id" class="flex">
      <img @click="updateImage(img)" :src="img" class="w-[76px] h-[80px] hover:backdrop-brightness-75" :alt="SingleProduct.title"><br>
   </div>
   </div>
   
</div>

<!---- product details------>
<div class="text-start">
   <h3 class="md:text-[42px] text-[30px]">{{ SingleProduct.title }}</h3>
   <p class="text-[24px] text-gray ">$ {{ SingleProduct.price }}</p>
   <div class="flex  gap-5 my-7">
      <div class=" flex">
         <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[SingleProduct.rating > rating ? 'text-primary-color' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
      </div>
      <span> | </span>
      <!-- <p class="text-gray text-[13px]">{{ SingleProduct.reviews.length }} reviews</p> -->
             
   </div>
   <p class="text-[13px]">{{ SingleProduct.description }}</p>
   <p class="bold mt-3" v-if="SingleProduct.brand">Brand: {{ SingleProduct.brand }}</p>

   <div class="flex gap-2 mt-5">
     <div class=" flex border border-gray border-solid rounded-[10px] p-2 md:py-3 md:px-5">
      <button @click="count--">-</button>
      <input class="w-[25px] text-center" type="number" min="1" v-model="count">
      <button @click="count++">+</button>
     </div>
      <button @click='addToCart(SingleProduct)' class="text-[20px] hover:text-white hover:bg-primary-color px-5 py-3 border border-solid hover:border-0  border-black rounded-[15px]">Add To Cart</button>
      <svg class="my-auto w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
   </div>
   <hr class="text-gray my-10">

   <div>
      <table class="text-gray text-base leading-8">
         <tr>
            <td>SKU</td>
            <td>: {{ SingleProduct.sku}}</td>
         </tr>
         <tr>
            <td>Category</td>
            <td>: {{ SingleProduct.category}}</td>
         </tr>
         <tr>
            <td>Tags</td>
            <td>: <a v-for="tag in SingleProduct.tags" :key="tag.id">{{tag}} ,</a></td>
         </tr>
      </table>
   </div>

   
</div>
</div>

<div class="mt-7">
   <hr>
   <div class="flex gap-4 justify-center mt-4">
      <h3>Description</h3>
      <span>|</span>
      <h3>Reviews </h3>
     
   </div>

   <!------reviews Section ---->
   <div  class="p-20 text-start ">
      <table class="w-full">
         <tr  v-for="review in SingleProduct.reviews"  :key="review.id">
            <td class="p-5">
             <h5 class="bold">{{ review.reviewerName}}</h5>
            </td>
            <td class="p-5 flex justify-between">
               <div>
               <p class="text-gray ">{{ review.comment }}</p>
               <span class="text-xs">{{ review.date.substring(0,10) }}</span>
            </div>
               <div class=" flex">
         <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-primary-color' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
      </div>
            </td>
         </tr>
         
      </table>
       
   </div>
</div>
</div>

<transition>
<ToastView v-if="showToast" />
</transition>

<SearchView/>

</template>


<script setup>
import ToastView from '@/components/Toast.vue'

import SearchView from "@/components/SearchIcon.vue";

import { computed, onMounted,ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { StarIcon } from '@heroicons/vue/20/solid'


const store = useStore();
const SingleProduct = computed(() => store.state.oneProduct);

const route = useRouter();

 let count =ref(1)
 let showToast=ref(false)

  
//to replace the main product img with others 
const updateImage=(img)=>{
   SingleProduct.value.thumbnail= img
}


const addToCart= (item)=>{
   item.count=count.value
   store.commit('addToCart',item)
   
 showToast.value=true
   setTimeout(()=>showToast.value=false,1000)
}

onMounted(()=>{
   const p=route.currentRoute.value.params.id

       store.dispatch('getOneProduct',p)
       
    }
)
</script>

<style>
/* svg{
  width:22px;
  height: 22px;
  } */

  

</style>