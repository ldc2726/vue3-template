/*
 * @Author: decong.li
 * @Date: 2022/02/06 14:47:24 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 16:12:32 Thursday
 * @FilePath: /vite-project/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/common.scss";' // 预处理公共样式
      }
    }
  },
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src')
    }
  }
})
