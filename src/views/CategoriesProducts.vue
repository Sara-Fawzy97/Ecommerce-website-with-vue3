<template>
  <p>Categor</p>
  <!-- <all-products/> -->
  {{ category }}
</template>

<script setup>

import { computed, onMounted} from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

const store = useStore();
const category = computed(() => store.state.category);
const route = useRouter();

 onMounted(()=>{
   const p=route.currentRoute.value.params.category

    store.dispatch("getCategoryProducts",p);

 })
</script>

<style>

</style>