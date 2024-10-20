<template>
  
<div class="homeBanner pt-28 pl-96 pr-20">
    <div class="max-w-xl text-left p-5">
        <span class="text-xs font-semibold">New arrival</span>
        <h3 class="font-bold text-5xl">Discover our new collection</h3>
        <p class="font-medium text-lg pt-3 pb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ullam natus cumque assumenda et architecto! Fugiat, hic? Distinctio molestias commodi sit? Nisi incidunt facere iusto minus nihil similique. Veniam, voluptate.</p>
   <span><router-link to="/" class="font-bold">Buy Now</router-link></span>
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
  background-color:#FFF3E3

}
.homeBanner a{
    color: #fff;
    margin-top: 10px;
    padding: 10px 25px;
    background-color: #B88E2F;
}
</style>