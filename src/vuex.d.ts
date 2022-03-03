/*
 * @Author: decong.li
 * @Date: 2022/02/06 20:37:54 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/02/06 20:40:36 Sunday
 * @FilePath: /vue3/第七节/vite-project/src/vuex.d.ts
 */
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from "./store";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}