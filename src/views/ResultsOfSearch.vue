<template>
  <div class="p-20 text-left">
    <h1>Search Results </h1>
    <p>{{ searcheProducts.length }} matches</p>
    </div>

   
<ProductsView :products="searcheProducts" />
    
<featuers-view></featuers-view>

 

</template>
 


<script setup>
import FeatuersView from "@/components/Features.vue";
import ProductsView from "@/components/AllProducts.vue";

import {computed} from "vue";
import { useStore } from "vuex";

const store = useStore();

const searcheProducts = computed(() => store.state.searchedProducts);


</script>

<style>

</style>