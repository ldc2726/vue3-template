/*
 * @Author: decong.li
 * @Date: 2022/02/06 14:47:24 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:41:01 Thursday
 * @FilePath: /vite-project/src/main.ts
 */
import { createApp } from 'vue'

import App from './App.vue'
import store, { Key } from './store'
import { routeHash } from './router'
import Components from './components'
import './qiankun'
const router = routeHash('/')



const app = createApp(App)
// app.config.globalProperties.$api = apiList
app.use(router)
.use(store, Key)
.use(Components)
.mount('#app')
