/*
 * @Author: decong.li
 * @Date: 2022/02/06 14:47:24 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/02 20:34:47 Wednesday
 * @FilePath: /vite-project/src/env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 环境变量
interface ImportMetaEnv {
  VITE_BASE_URL: string
}

// 定义window
declare interface Window {
  App: any;
  commonComponent: any
}
