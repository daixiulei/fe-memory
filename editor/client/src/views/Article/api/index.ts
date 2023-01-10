/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 14:49:33
 * @Description:
 */
import axios from "axios"

export function queryMenuTree(params?: any) {
    return axios.get("/api/menutree", params).then(r => r.data)
}

export function renderPost(params?: any) {
    return axios.post("/api/render/post", params).then(r => r.data)
}
