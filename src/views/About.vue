<!--
 * @Author: decong.li
 * @Date: 2022/02/06 21:50:33 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:26:09 Thursday
 * @FilePath: /vite-project/src/views/About.vue
-->
<!-- about -->
<template>
    <div>about</div>
    <button @click="gotoHome">点击去home页面</button>
</template>

<script lang='ts' setup>
import {ref, defineComponent, reactive, onMounted, getCurrentInstance} from 'vue';
import { useRouter } from "vue-router";
const router = useRouter()
const gotoHome = () =>{
  router.push('/home')
}
onMounted(()=>{
})
</script>

<style lang='scss' scoped>

</style>
