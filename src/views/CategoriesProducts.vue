<template>
  <p>Category is </p>
  <!-- <all-products/> -->
  <!-- <p> </p> -->

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

    store.dispatch("getCategoryProducts",p);

 })
</script>

<style>

</style>