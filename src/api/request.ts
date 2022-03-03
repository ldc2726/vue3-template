import axios from "axios";
import { IDataType } from './common';

/*
 * @Author: decong.li
 * @Date: 2022/02/06 22:27:23 Sunday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 15:26:53 Thursday
 * @FilePath: /vite-project/src/api/request.ts
 */
console.log(import.meta.env)
const $http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

// 请求拦截
// axios.interceptors.request.use(config=>{

// })

// 响应拦截
// axios.interceptors.response.use(response=>{
// })
interface PostData {
  url: string;
  data?: any;
  params?:object
}
const $post = async <T>(postda: PostData) => {
  const res = await $http.post<IDataType<T>>(postda.url, postda.data)
  return res.data.result
}
const $get = async <T>(postda: PostData) => {
  const res = await $http.get<IDataType<T>>(postda.url,{params:postda.params})
  return res.data.result
}
export {
  $post,
  $get
}
export default $http




