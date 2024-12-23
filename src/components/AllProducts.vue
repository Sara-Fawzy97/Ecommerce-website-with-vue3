<template>
 <!-------display productss--->
 <div>
    <div class="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 px-2">
      <!----the over background------>
      <div class="card mb-6 relative" v-for="product in products" :key="product.id">
        <img :src="product.thumbnail" alt="product.title" />
        <div class="description px-2 pt-2 pb-7 text-start">
          <h5 class="dark-gray text-[16px] md:text-[22px] lg:text-[24px] font-semibold">
            {{ product.title }}
          </h5>
          <p class="font-medium text-[10px] md:text-base text-[#898989]">
            {{ product.description.substring(0, 40) }} ...
          </p>
          <span class="dark-gray font-semibold text-[14px] md:text-[20px]">
            {{ product.price }} $
          </span>
        </div>

        <div class="rounded overCard bg-[#3A3A3A]/70 w-full h-full absolute top-0 content-center opacity-0">
          <router-link :to="'/shop/' + product.id"
            class="text-primary-color hover:bg-white py-2 px-7 border-solid border-primary-color border-2">View</router-link><br />

          <button @click="addToCart(product)" class="bg-white text-primary-color py-2 px-7 mt-5">
            Add To Cart
          </button>
        </div>
      </div>
    </div>

  </div>

 <!-----toast after add to cart----->
 <transition>
    <ToastView v-if="showToast" />
  </transition>   
</template>

<script setup>
import { defineProps,ref } from "vue";
import ToastView from "@/components/Toast.vue";
import { useStore } from "vuex";
defineProps({
    products:{
        type:Array,
        Required:true
    }
})

const store = useStore();

let count = ref(1);

let showToast = ref(false);

const addToCart = (item) => {
  item.count = count.value;
  store.commit("addToCart", item);

  showToast.value = true;
  setTimeout(() => (showToast.value = false), 1000);
};
</script>

<style>

</style>