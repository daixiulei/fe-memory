/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-17 20:46:13
 * @Description:
 */
import connect from "koa-connect"
import path from "path"
import compress from "koa-compress"

const { pathes } = require("./config")

export default async function createRenderServer(app) {
    if (!global.IS_PROD) {
        global.vite = await require("vite").createServer({
            configFile: path.resolve(__dirname, "../../client/vite.config.ts"),
            server: {
                middlewareMode: "ssr"
            }
        })
        app.use(connect(global.vite.middlewares))
    } else {
        app.use(compress())

        app.use(
            require("koa-static")(pathes.dist, {
                index: false
            })
        )
    }
}
