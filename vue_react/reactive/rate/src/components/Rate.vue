<template>
    <div>
        {{ props.rate }}
    </div>
</template>

<script setup>
import {defineProps}from 'vue';
let count =ref(0)
// 子组件和父组件不一定时一直绑定的，哪里要用往哪搬
// 定义props 业务 消费数据，不是自身的数据,而和父组件绑定
// 告诉外界，我需要一个什么类型的数据
let props =definedProps({
    value:Number
})
let rate = computed(()=>"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
</script>

<style scoped>

</style>