<template>
  <div class="thumb h-[300px]">
    <div>
      <div class="content-center">
        <h3 class="text-[48px] font-medium">Shop</h3>
        <div class="text-[16px]">
          <a href="/" class="font-medium">Home</a> >
          <a href="#" class="">Shop</a> 
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#F9F1E7]">
    <div class="flex justify-between py-5 px-16">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
          />
        </svg>
        filter
      </div>
      <div class="flex justify-around">
        <div>Show <span> 16</span></div>
        <div>Sort by <span></span></div>
      </div>
    </div>
  </div>

  <!-------display productss--->
  <div>
    <div
      class="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 px-2"
    >

    <!----the over background------>
      <div class="card  mb-6 relative" v-for="product in products" :key="product.id">
       
        <img :src="product.thumbnail" alt="product.title" />
        <div class="description px-2 pt-2 pb-7 text-start">
          <h5
            class="dark-gray text-[16px] md:text-[22px] lg:text-[24px] font-semibold"
          >
            {{ product.title }}
          </h5>
          <p class="font-medium text-[10px] md:text-base text-[#898989]">
            {{ product.description.substring(0, 40) }} ...
          </p>
          <span class="dark-gray font-semibold text-[14px] md:text-[20px]">
            {{ product.price }} $</span
          >
        </div>

        <div class="  rounded overCard bg-[#3A3A3A]/70 w-full h-full absolute top-0 content-center opacity-0">
          
          <router-link :to="'/shop/'+product.id" class="text-primary-color hover:bg-white py-2 px-7 border-solid border-primary-color border-2" >View</router-link><br>

          <button  @click="addToCart(product)" class="bg-white text-primary-color py-2 px-7 mt-5">Add To Cart</button>
        </div>
      </div>
    </div>
  
    <vue-awesome-paginate
    :total-items="194"
    :items-per-page="10"
    :max-pages-shown="4"
    v-model="currentPage"
    @click="onClickHandler"
  />
  </div>

  <FeatuersView/>

  <!-----toast after add to cart----->
  <transition>
<ToastView v-if="showToast" />
</transition>

</template>

<script>
import FeatuersView from "@/components/Features.vue";
import ToastView from "@/components/Toast.vue";

export default {
    components:{FeatuersView,ToastView}
}
</script>

<script setup>
import { computed, onMounted,ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.ALlproducts);

 let showToast=ref(false);

 let count= ref(1)

 const onClickHandler = (page) => {
  console.log(skip.value +"+"+ limit.value)
  skip.value=(page*limit.value)-limit.value
  console.log(skip.value +"+"+ limit.value)
  store.dispatch("getAllProducts",{limit:limit.value,skip:skip.value});

    console.log(page);
  };

  const currentPage = ref(1);


const addToCart= (item)=>{
   item.count=count.value
   store.commit('addToCart',item)

   showToast.value=true
   setTimeout(()=>showToast.value=false,1000)
}

let limit=ref(30)
let skip=ref(0)

onMounted(() => {  
  store.dispatch("getAllProducts",{limit:limit.value,skip:skip.value});
});

</script>

<style>
.thumb {
  background: url("../assets/thumb.png") no-repeat;
}

.card:hover .overCard{
  opacity: 1;
  transition: all .5s linear;
}


.pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover{
    background-color: #2988c8;
 

  }
</style>
