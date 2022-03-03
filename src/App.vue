<!--
 * @Author: decong.li
 * @Date: 2022/02/06 14:47:24 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 16:15:05 Thursday
 * @FilePath: /vite-project/src/App.vue
-->
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld msg="hello vue3+vite+ts+vuex+qiankun"/>
  <router-link to="/home">go home</router-link>---
  <router-link to="/about">go about</router-link>
  <router-view></router-view>
  <!-- 子应用案例 -->
  <div id="container"></div>
  <!-- 全局组件案例 -->
  <demo/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
