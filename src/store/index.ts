/*
 * @Author: decong.li
 * @Date: 2022/02/06 20:31:46 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/02 18:11:34 Wednesday
 * @FilePath: /vite-project/src/store/index.ts
 */
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
export const Key: InjectionKey<Store<State>> = Symbol()
export type State = {
  count: number
}
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    addCount(state) {
      state.count++
    }
  }
})