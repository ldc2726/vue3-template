/*
 * @Author: decong.li
 * @Date: 2022/03/03 14:23:40 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 14:23:41 Thursday
 * @FilePath: /vite-project/src/public-path.ts
 */
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

declare var __webpack_public_path__: string|undefined
if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log(qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__,'如果子应用被使用则在这里')
  // __webpack_public_path__ = qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}