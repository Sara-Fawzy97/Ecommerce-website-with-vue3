<template>
    <transition>
    <div>
        <h1 class=" border bold bg-primary-color/85 w-[300px] text-white justify-self-center fixed bottom-6 start-4 p-4 rounded-md">Added Successfully</h1>
    </div>
</transition>
</template>

<script>
export default {
    name: "ToastView",

}
</script>

<style>

.toast-enter-from{
  opacity: 0;
}

.toast-enter-to{
  opacity: 1;
}

.toast-enter-active{
  transition: all .5s linear;
}
</style>