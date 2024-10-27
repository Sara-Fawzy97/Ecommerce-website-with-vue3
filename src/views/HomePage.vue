<template>
  
<div class="homeBanner pt-28  pr-20">
    <div class="w-2/5 text-left p-12 ">
        <span class="text-xs font-semibold">New arrival</span>
        <h3 class="font-bold text-5xl text-primary-color">Discover Our New Collection</h3>
        <p class="font-medium text-lg pt-3 pb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
   <span><router-link to="/" class="font-bold bg-primary-color">Buy Now</router-link></span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.homeBanner{    
    background: url('../assets/banner.png') no-repeat;
    background-size: contain;
    height: 716px;
    
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
</style>