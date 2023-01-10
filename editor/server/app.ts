/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 14:39:53
 * @Description:
 */
import Koa from "koa"
import bodyparser from "koa-bodyparser"
import mount from "koa-mount"
import logger from "koa-logger"

import indexRoute from "./routes/index"
import apiRoute from "./routes/api"
import viewRoute from "./routes/view"
import createRenderServer from "./utils/createRenderServer"
import watch from "./utils/fileWatcher"

const app = new Koa()

global.IS_PROD = process.env.NODE_ENV === "production"

app.use(bodyparser())

app.use(logger())

createRenderServer(app)

watch.runWatcher()

app.use(indexRoute.routes())
app.use(mount("/api", apiRoute.middleware()))
app.use(mount("/view", viewRoute.middleware()))

app.on("error", function (err, cxt) {
    console.error("server error", err, cxt)
})

export default app
