<template>
  
<div class="homeBanner md:pt-32 pt-9 md:pr-20 pr-10 pb-28 ">
    <div class="w-6/12 text-left md:p-11 p-3">
        <span class="text-xs font-semibold">New arrival</span>
        <h3 class="font-bold lg:text-5xl sm:text-2xl text-primary-color">Discover Our<br> New Collection</h3>
        <p class="font-medium lg:text-lg text-xs pt-2 md:pb-12 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
   <span><router-link to="/" class="font-bold bg-primary-color md:p-3">Buy Now</router-link></span>
    </div>
</div>

<div>
    <div class="my-20">
    <h5 class="text-3xl font-bold ">Browse The Range</h5>
    <p class="text-xl  text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div>
        <div v-for="category in categories" :key="category.name">
            {{ category }}
        </div>
    </div>
</div>
</template>

<script setup>
    import { onMounted } from 'vue';
import getCategories from '../composable/categories'
const {categories,load}=getCategories()
categories
load()
onMounted(()=>{
    getCategories()
})

</script>

<style>

.homeBanner{    
    background: url('../assets/banner.png') no-repeat;
    background-size: cover;
    /* height: 716px; */
    overflow: hidden;
    
}
.homeBanner div{
  /* font-family: "Poppins", serif; */
  background-color:#FFF3E3;
  float: right;
  border-radius: 10px;

}
.homeBanner a{
    color: #fff;
    margin-top: 10px;
    padding: 16px 36px;
}
@media (max-width:786px) {
    .homeBanner a{
        font-size:10px;
        padding:6px 14px;

    }
}
</style>