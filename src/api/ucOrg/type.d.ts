/*
 * @Author: decong.li
 * @Date: 2022/03/03 09:57:20 Thursday
 * @LastEditors: decong.li
 * @LastEditTime: 2022/03/03 13:44:05 Thursday
 * @FilePath: /vite-project/src/api/ucOrg/type.d.ts
 */
export interface createOrgReq {
  name: string;
  parentId: number;
  remark: string;
  status: number;
}
export interface createOrgRes {
  name?: string
  id?: number
}

export interface getOrgListPageRes{
  orgName: string
  parentId: number
}

export interface getOrgListPageReq{
  success: string
}
