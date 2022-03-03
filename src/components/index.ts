/*
 * @Author: decong.li
 * @Date: 2022/03/02 20:36:16 Wednesday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:40:01 Thursday
 * @FilePath: /vite-project/src/components/index.ts
 */


// 子组件使用父组件时调用
import demo from "@/components/demo.vue";
window.commonComponent = { demo }

export default {
  // @ts-ignore
  install: (app) => {
    app.component(demo.name,demo)
  }
}