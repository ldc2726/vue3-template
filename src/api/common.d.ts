/*
 * @Author: decong.li
 * @Date: 2022/03/03 12:46:44 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 13:26:12 Thursday
 * @FilePath: /vite-project/src/api/common.d.ts
 */
export interface IDataType<T = any> {
  code: number
  isSuccess?: boolean
  message: string
  result: T
} 