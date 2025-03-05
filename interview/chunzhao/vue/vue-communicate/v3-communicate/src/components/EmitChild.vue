<template>
    <div>
        <button @click="handleClick">按钮</button>
        <button @click="EmitParent('myClick','hello')">按钮</button>
    </div>
</template>

<script setup>
const handleClick = () => {
    emit ('myClick', 'hello')
}
</script>

<style scoped>

</style>