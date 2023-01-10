/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-17 20:57:38
 * @Description:
 */
import Router from "koa-router"

const index = new Router()

index.get("/", async function (cxt) {
    cxt.status = 301
    cxt.redirect("/view")
})

export default index
