<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup>
  import { inject } from 'vue';
  const name = inject('name'); //key value
</script>

<style  scoped>

</style>