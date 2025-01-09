<script setup>
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';
import { useUserStore } from './store/user';
</script>

<template>
  <div>
    <CompA />
    <CompB />
  </div>
</template>

<style scoped> 
</style>