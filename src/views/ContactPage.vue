<template>
    <div class="thumb h-[300px]">
    <div>
      <div class="content-center">
        <h3 class="text-[48px] font-medium">Contact Us</h3>
        <div class="text-[16px]">
          <a href="/" class="font-medium">Home</a> >
          <a href="#" class="">Contact</a>
        </div>
      </div>
    </div>
  </div>

  <div class="my-20  ">
      <h5 class="text-[36px] font-semibold text-[#000]">Get In Touch With Us</h5>
      <p class="text-gray text-base w-[644px] place-self-center "> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>
    </div>
  

    <div class="grid grid-cols-2 px-5 text-[#000]">
       <!---- details------>
      <div>
        <div class="flex text-start gap-2">
          <svg class=" mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <div> 
            <h5 class="font-medium text-[26px]">Address</h5>
            <p class="font-regular">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
      </div>
      <div class="flex text-start gap-2">
        <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <div> 
            <h5 class="font-medium text-[26px]">Phone</h5>
            <p class="font-regular">Mobile: +(84) 546-6789<br>
              Hotline: +(84) 456-6789</p>
          </div>
      </div>
      <div  class="flex text-start gap-2">
        <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <div> 
            <h5 class="font-medium text-[26px]">Working Time</h5>
            <p class="font-regular">Monday-Friday: 9:00 - 22:00<br>
              Saturday-Sunday: 9:00 - 21:00</p>
          </div>
      </div>
      </div>

       <!----form ------>
      <div></div>
    </div>
  <FeatuersView />
</template>


<script>
import FeatuersView from "@/components/Features.vue";

export default {
  components: { FeatuersView},
};
</script>

<script setup>

</script>

<style>

</style>