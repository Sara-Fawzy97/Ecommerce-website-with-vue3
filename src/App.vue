<template>
 
  <HeaderView/>
  
  <Router-view />

  <FooterView/>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderView from './components/Header.vue';
import FooterView from './components/Footer.vue';
export default {
  name: 'App',
  components:{HeaderView,FooterView}
 
}
</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Poppins", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav>a{
  font-family:  "Montserrat", sans-serif;;
  font-weight: bold;
  font-size: 34px;
}
.list{  
  font-family: "Poppins", serif;
  font-weight: 500;
}

</style>
