<template>
  <div class="homeBanner md:pt-32 pt-9 md:pr-20 pr-10 pb-28">
    <div class="w-6/12 text-left md:p-11 p-3">
      <span class="text-xs font-semibold">New arrival</span>
      <h3 class="font-bold lg:text-5xl sm:text-2xl text-primary-color">
        Discover Our<br />
        New Collection
      </h3>
      <p class="font-medium lg:text-lg text-xs pt-2 md:pb-12 pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <span
        ><router-link
          :to="{ name: 'shopPage' }"
          class="font-bold bg-primary-color md:p-3"
          >Buy Now</router-link
        ></span
      >
    </div>
  </div>


  <!---- view categories--------->
  <div class="categories">
    <div class="my-20">
      <h5 class="text-3xl font-bold">Browse The Range</h5>
      <p class="md:text-xl text-[12px] text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="flex text-center justify-around">
      <div
        class="text-center"
        v-for="(category, index) in categories.slice(0, 3)"
        :key="index"
      >
        <!-- {{ category }} -->
          <router-link :to="'/categories/'+ category.name "> 
            <img
          :src="categoriesImg[index]"
          :alt="category.slug"
          class="h-[150px] md:h-[300px] hover:scale-75 transition-all hover:opacity-25"
        />
        <a
          class="font-semibold text-[20px] md:text-[24px]"
          :href="category.url"
          :alt="category.slug"
        >
          {{ category.name }}</a
        >
          </router-link>
       
      </div>
    </div>
  </div>
  
  <!------------view products-------------->
  <div class="products">
    <div class="my-20">
      <h5 class="text-3xl font-bold">Our Products</h5>
    </div>
    <div>
      <div
        v-if="products"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-6 px-2"
      >
        <div class="card mb-6 relative" v-for="product in products" :key="product.id">
          <img :src="product.thumbnail" alt="product.title" class="hover:scale-125 transition-all" />
          <div class="description px-2 pt-2 pb-7 text-start">
            <h5
              class="dark-gray text-[16px] md:text-[22px] lg:text-[24px] font-semibold"
            >
              {{ product.title }}
            </h5>
            <p class="font-medium text-[10px] md:text-base text-[#898989]">
              {{ product.description.substring(0, 40) }} ...
            </p>
            <span class="dark-gray font-semibold text-[14px] md:text-[20px]">
              {{ product.price }} $</span
            >

               <!--  the over background-------->
               
          </div>
         
          <div class="rounded overCard bg-[#3A3A3A]/70 w-full h-full absolute top-0 content-center opacity-0">
              <router-link
                :to="'/shop/' + product.id"
                class="text-primary-color hover:bg-white py-2 px-7 border-solid border-primary-color border-2"
                >View</router-link
              > <br/>

              <button @click="addToCart(product)" class="bg-white text-primary-color py-2 px-7 mt-5">
                Add To Cart
              </button>
            </div>
        </div>
      </div>
      <router-link
        :to="{ name: 'shopPage' }"
        class="text-primary-color text-base border-solid border-primary-color border-2 py-2 px-7 mt-5"
      >
        See More</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted,ref } from "vue";
import { useStore } from "vuex";
// import { ALlProducts } from "../components/AllProducts.vue";

// const {categories,load}=getCategories()
// categories
// load()

const store = useStore();
const categories = computed(() => store.state.categories);
const categoriesImg = computed(() => store.state.categoriesImg);
const products = computed(() => store.state.ALlproducts);

let count= ref(1)
const addToCart= (item)=>{
   item.count=count.value
   store.commit('addToCart',item)
}

onMounted(() => {
  // getCategories()
  store.dispatch("getAllCategories");
  store.dispatch("getAllProducts");
});
</script>

<style>
.homeBanner {
  background: url("../assets/banner.png") no-repeat;
  background-size: cover;
  /* height: 716px; */
  overflow: hidden;
}
.homeBanner div {
  /* font-family: "Poppins", serif; */
  background-color: #fff3e3;
  float: right;
  border-radius: 10px;
}
.homeBanner a {
  color: #fff;
  margin-top: 10px;
  padding: 16px 36px;
}

.categories a {
  color: #333;
  font-family: "Poppins", serif;
}

.description {
  background-color: #f4f5f7;
  height: 180px;
}

.card:hover .overCard{
  opacity: 1;
  transition: all .5s linear;
}

/*** mobile and tablet view***/
@media (max-width: 786px) {
  .homeBanner a {
    font-size: 10px;
    padding: 6px 14px;
  }
}

/***mobile only* */
@media (max-width: 425px) {
}
</style>
