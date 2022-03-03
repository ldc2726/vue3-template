/*
 * @Author: decong.li
 * @Date: 2022/02/06 21:49:48 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 13:59:07 Thursday
 * @FilePath: /vite-project/src/router/index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
]

const routeHash = (hash: string) =>{
  const router = createRouter({
    history: createWebHashHistory(hash),
    routes
  })
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
  })
  return router
}
export {
  routeHash
}