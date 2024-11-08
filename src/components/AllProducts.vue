<template>
 <div>
    <p>Sara</p>
    <div v-for="product in products" :key="product.id">
        <h3>{{product.name}}</h3>
    </div>
 </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store=useStore()
   const products=computed(()=>store.state.products)

onMounted(
    ()=>{
        store.dispatch('getAllProducts')
    }
)
</script>

<style>

</style>