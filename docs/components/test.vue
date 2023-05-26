<template>
    <div class="test" @click="btn">
        我是test页面
    </div>
</template>
<script setup>
const btn = ()=>{
    alert(1)
}
</script>
<style>
.test{
    border: 1px solid red;
}
</style>
