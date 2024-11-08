<template>
    <div class="thumb h-[300px]">
        <div>
           <h3 class="text-[48px] font-medium">Shop</h3>
           <div class="text-[16px]"><a href="/" class="font-medium">Home</a> > <a href="#" class="">Shop</a></div>
        </div>
    </div>

  <div >
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 px-2">
            <div class="card mb-6"  v-for="product in products" :key="product.id">
                <img :src="product.thumbnail" alt="product.title">
                <div class="description px-2 pt-2 pb-7 text-start">
                    <h5 class="dark-gray text-[16px] md:text-[22px] lg:text-[24px] font-semibold">{{product.title}}</h5>
                    <p class="font-medium text-[10px] md:text-base text-[#898989]">{{product.description.substring(0,40)}} ...</p>
                    <span class="dark-gray font-semibold text-[14px] md:text-[20px]"> {{product.price}} $</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";


const store = useStore();
const products=computed(()=>store.state.ALlproducts)


onMounted(() => {
  store.dispatch('getAllProducts')

});
</script>

<style>

.thumb{
    background: url('../assets/thumb.png') no-repeat;
}
</style>