<script setup>
import { ref } from 'vue'
import store from '@/store'
import { storeToRefs } from 'pinia'
const count = ref(0)
const { getUserInfo } = store.user
console.log(getUserInfo());
</script>

<template>
  <h1>{{ count }}</h1>
  <!-- <h2>{{ userInfo }}</h2> -->
</template>

<style scoped lang="less">
a {
  color: #42b983;
}
</style>
