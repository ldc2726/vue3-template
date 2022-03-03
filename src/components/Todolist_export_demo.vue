<!--
 * @Author: decong.li
 * @Date: 2022/02/06 15:40:50 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:32:57 Thursday
 * @FilePath: /vite-project/src/components/Todolist_export_demo.vue
-->
<!--   -->
<template>
  <h1>我是todolist子组件</h1>
  <div>{{ count }}</div>
  <input v-model="count"/>
  <div>doubleCount-{{doubleCount}}</div>
  <!-- array类型 -->
  <button @click="addList">点击新增</button>
  <div v-for="(item, index) in items" :key="index">
    <div>id:{{ item.id }}</div>
    <div>name:{{ item.name }}</div>
    <div>age:{{ item.age }}</div>
  </div>
  <!-- props传值的类型推断 -->
  <div :style="{ color: Info?.color }">{{ Info?.title }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo, Info } from "../types";
export default defineComponent({
  name: 'todolist',
  props: {
    Info: {
      type: Object as PropType<Info>,
      require: true
    }
  },
  data() {
    return {
      count: 0,
      items: [] as Todo[]
    }
  },
  methods: {
    newTodo():Todo {
      return {
        id: this.items.length,
        name: 'xiaoming',
        age: 22
      }
    },
    addList():void {
      this.items.push(this.newTodo())
    }
  },
  computed:{
    doubleCount():number {
      return this.count * 2
    }
  },
  components: {

  }
})

</script>

<style lang='scss' scoped>
</style>
