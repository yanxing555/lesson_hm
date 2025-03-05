<template>
    <div>
        <ExpostChild ref="comp"/>
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script setup>
import ExpostChild from './ExposeChild.vue';
import{ref} from 'vue';
const comp = ref(null);
const handleClick = () => {
    console.log(comp.value);
    comp.value.handleClick();

}

</script>

<style  scoped>

</style>