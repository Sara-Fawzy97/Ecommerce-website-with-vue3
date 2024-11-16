<template>
    <div>{{ cartItems }}</div>
  </template>
  
  <script setup>
  import { useStore } from "vuex";
  import { computed, onMounted } from "vue";
  
  
  const store = useStore();
  const cartItems = computed(() => store.state.cartItems);
  
  
  onMounted(()=>{
      store.commit('getCart') 
  
  })
    
  </script>
  
  <style>
  
  </style>