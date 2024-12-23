<template>
  <div class="p-20 text-left">
    <h1>Search Results </h1>
    <p>{{ searcheProducts.length }} matches</p>
    </div>

   
<ProductsView :products="searcheProducts" />
    
<featuers-view></featuers-view>

 <!-----toast after add to cart----->
 <transition>
    <ToastView v-if="showToast" />
  </transition>

</template>
 


<script setup>
import FeatuersView from "@/components/Features.vue";
import ToastView from "@/components/Toast.vue";
import ProductsView from "@/components/AllProducts.vue";

import {computed,ref} from "vue";
import { useStore } from "vuex";

const store = useStore();

const searcheProducts = computed(() => store.state.searchedProducts);
let showToast = ref(false);


</script>

<style>

</style>