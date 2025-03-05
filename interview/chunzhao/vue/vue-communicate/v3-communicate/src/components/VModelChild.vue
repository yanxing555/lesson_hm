<template>
    <div>
        {{ value }}
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
defineProps(['value']);
const handlecClick = () => {
    emit('update:value', '新的value');
}
</script>

<style scoped>

</style>