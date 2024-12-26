<template>
  <div class="footer px-7 md:px-24 py-12 border-t-2 border-gray text-left mt-20">
    <div class="md:flex flex-wrap justify-around ">
      <div>
        <h3 class="font-bold text-base">Funiro.</h3>
        <p class="text-gray md:pt-8 text-[12px] md:text-base">
          400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
        </p>
      </div>
      <!------links------->
      <div class="mt-3">
        <h3 class="text-gray">Links</h3>
        <div class="font-medium"> 
        <ul>
           <li><router-link :to="{name:'homePage'}">Home</router-link></li>
           <li> <router-link to="/shop">Shop</router-link></li>
           <li> <router-link to="/">About</router-link></li>
           <li> <router-link to="/contact">Contact</router-link> </li>
        </ul>
    </div>
      </div>

      <!-----help--------->
      <div>
        <h3 class="text-gray">Help</h3>
        <div class="font-medium"> 
        <ul>
           <li> <router-link to="/">Payment Options</router-link></li>
           <li> <router-link to="">Returns</router-link></li>
           <li> <router-link to="">Privacy Policies</router-link> </li>
        </ul>
    </div>
      </div>

      <!------form---------->
      <div>
        <h3 class="text-gray">Newsletter</h3>

        <form class="pt-8">
            <input placeholder="Enter Your Email Address" type="email" class="border-b-2 w-56">
            <button type="submit" class="border-b-2 ml-2.5 ">SUBSCRIBE</button>
        </form>
      </div>
    </div>

    <div class="border-t-2 mt-2.5 pt-9 border-gray"> <p class=" ">2023 furino. All rights reverved</p></div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
.footer {
  font-family: "Poppins", serif;
}
.footer li{
    margin: 30px 0;
}
</style>
