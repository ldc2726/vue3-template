<!--
 * @Author: decong.li
 * @Date: 2022/02/06 19:21:44 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:33:23 Thursday
 * @FilePath: /vite-project/src/components/todolist_setup_demo.vue
-->
<!-- copy -->
<template>
  <h1>我是todolist子组件</h1>
  <div>{{ count }}</div>
  <input v-model="count" />
  <div>doubleCount-{{ doubleCount }}</div>
  <!-- array类型 -->
  <button @click="addList">点击新增</button>
  <div v-for="(item, index) in items" :key="index">
    <div>id:{{ item.id }}</div>
    <div>name:{{ item.name }}</div>
    <div>age:{{ item.age }}</div>
  </div>
  <!-- props传值的类型推断 -->
  <div :style="{ color: Info?.color }">{{ Info?.title }}</div>
  <!-- store -->
  <div>{{ $store.state.count }}</div>
  <button @click="Tap">点击变化store的count</button>
</template>

<script lang='ts' setup>
import { ref, defineProps, computed } from 'vue';
import type { PropType } from "vue";
import { Todo, Info } from '../types'
import { useStore } from "vuex";
import { Key } from '../store';
const store = useStore(Key)
console.log(store.state.count)
const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const items = ref([] as Todo[])
//props
defineProps({
  Info: {
    type: Object as PropType<Info>
  }
})
//创建一个新的todo
const newTodo = (): Todo => {
  return {
    id: items.value.length,
    name: 'xiaoming',
    age: 22
  }
}
//点击新增
const addList = (): void => {
  items.value.push(newTodo())
}
const Tap = (): void => {
  store.commit('addCount')
}

function env(env: any) {
  throw new Error('Function not implemented.');
}
</script>

<style lang='scss' scoped>
</style>
