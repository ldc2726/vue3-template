/*
 * @Author: decong.li
 * @Date: 2022/02/06 14:47:24 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:03:40 Thursday
 * @FilePath: /vite-project/src/main-child.ts
 */
import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import store, { Key } from './store'
import { routeHash } from './router'
import './api/request'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// renders生命周期函数
renderWithQiankun({
  mount(props:any) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
  },
});


// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({container:''});
}
export async function mount(props:any) {
  console.log('[vue] props from main framework', props);
  render(props);
}

// 渲染页面
function render(props: any ): void {
  const { container } = props;
  const router = routeHash(qiankunWindow.__POWERED_BY_QIANKUN__ ? `${props.name}` : '/')
  const instance = createApp(App);
  // instance.component('hello',window.commonComponent.hello)
  instance.use(router);
  instance.use(store,Key);
  instance.mount(container ? container.querySelector('#container') : '#container');
}
