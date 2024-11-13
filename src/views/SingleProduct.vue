<template>
<p>Single Pro</p>
<div>
    {{ SingleProduct }}
</div>
</template>

<script setup>

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

const store = useStore();
const SingleProduct = computed(() => store.state.SingleProduct);

const route = useRouter();
 const p=route.currentRoute.value.params.id
onMounted(()=>{
       store.dispatch('getOneProduct',p)
    }
)
</script>

<style>

</style>