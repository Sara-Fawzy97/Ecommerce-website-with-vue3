<template>
  <div >
    <nav class="flex  justify-around items-center py-4">
      <router-link class="flex items-baseline" :to="{name:'homePage'}">
        <img src="../assets/logo.png" alt="logo" /> <span>Furniro</span></router-link
      >

      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <!-- <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> -->
        </button>
      </div>
      <div class="list xsm:hidden md:flex md:gap-x-12">
        <router-link :to="{ name: 'homePage' }">Home</router-link>
        <router-link :to="{ name: 'shopPage' }">Shop</router-link>
        <router-link to="/">About</router-link>
        <router-link :to="{ name: 'contactPage' }">Contact</router-link>
      </div>

      <div class="flex gap-x-5">
        <svg
          class="hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
          />
        </svg>
        <svg
          class="hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <svg
          class="hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
          />
        </svg>

        <svg @click="changeVisibilty()"
          class=" hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
        <!----start of Sidebar cart----->
         <transition>
        <div v-if="show" class=" sidebar  shadow-2xl cart z-50 end-0 top-0 w-[400px] h-screen fixed text-left px-4 pt-3 bg-white flex flex-col justify-between">
       
       <div>  
        <div class="flex justify-between content-center">
          <h3 class="text-[24px] font-semibold">Shopping list</h3>
          <svg @click="changeVisibilty()"  class=" self-center hover:cursor-pointer"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </div>
          <hr />

          <div class="max-h-[450px] overflow-y-auto">
            <table class=" p-5 w-full text-left">
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <img
                  :src="item.thumbnail"
                  :alt="item.title"
                  class="w-[100px] h-[100px] rounded"
                />
              </td>
              <td>
                <router-link
                  :to="'/shop/' + item.id"
                  class="text-sm content-center text-gray"
                  >{{ item.title }}</router-link
                >
                <p class="text-[12px]">{{ item.count }}  *  <span class="text-primary-color"> {{ item.price }}</span></p>
              </td>
              <td>
                <svg
                  @click="store.commit('delCartItem', item.id)"
                  class="transition ease-in-out delay-75 hover:-translate-y-1 hover:cursor-pointer " 
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z"
                    fill="#9F9F9F"
                  />
                </svg>
              </td>
            </tr>
          </table>
          </div>
         

        </div> 

          <div class="mb-5" >
             <div class="flex justify-between mb-3">
            <p>Subtotal</p>
            <p class="text-primary-color font-semibold"> ${{ total }}</p>
          </div>
          <hr>
          <div class="text-center mt-7 ">
            <router-link to="/cart" class=" hover:bg-[#F9F1E7] mt-7 mb-16 border rounded-full px-5 py-1.5 text-[12px]">To Cart</router-link>
            <router-link to="/" class=" hover:bg-[#F9F1E7] mt-7 mb-16 border rounded-full px-5 py-1.5 text-[12px]">Checkout</router-link>
          </div> 
          </div>
          
        </div>
      </transition>
        <!----end of sidebar cart------------>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted,ref } from "vue";

const store = useStore();

let show=ref(false);

const changeVisibilty=()=>{
  show.value =!show.value
  // console.log(hidden.value)
}
const cartItems = computed(() => store.state.cartItems);

let total =ref(0) ;

let handleTotalPrice = () => {
  
  cartItems.value.forEach((item) => {
    total.value += Math.ceil(item.count * item.price);
  });
  return total;
};

onMounted(() => {
  store.commit("getCart");
  handleTotalPrice();
});
</script>

<script>
export default {
  name: "HeaderView,ToastView",
};
</script>

<style scoped>
nav > a {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 34px;
}
.list {
  font-family: "Poppins", serif;
  font-weight: 500;
}
svg {
  width: 22px;
  height: 22px;
}


.v-enter-from{
 right:-400px;
 opacity: 0;

}

.v-enter-to{
 right:0;
 opacity: 1;
}

.v-enter-active{
  transition: all linear 1s;

}
.v-leave-to {
  right:-400px;
  opacity: 0;
} 
.v-leave-active{
  transition: all linear 1s;

}



</style>
