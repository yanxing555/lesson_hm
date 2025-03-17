<template>
    <div>
        {{ count }}
        {{ double }}
    </div>
</template>

<script setup>
import { ref, computed } from 'vue' //一定会先执行一次
const count = ref(0)
const double = ref(0)

watchEffect(() => {
    double.value = count.value * 2
})

setTimeout(() => {
    count.value++ 
},1000)
</script>

<style scoped>

</style>