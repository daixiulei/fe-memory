import Router from "koa-router"
import fs from "fs"
import config from "../utils/config"

const { pathes } = config

const app = require("../app")

const view = new Router()

view.get(/.+/gi, async function (cxt) {
    const url = cxt.req.url

    try {
        let template, render
        if (!global.IS_PROD) {
            template = fs.readFileSync(pathes.template, "utf-8")
            template = await global.vite.transformIndexHtml(url, template)
            render = (await global.vite.ssrLoadModule(pathes.serverDevEntry)).render
        } else {
            template = fs.readFileSync(pathes.distTemplate)
            render = await require(pathes.serverDistEntry).render
        }
        const context = {}
        const appHtml = await render(url, context)
        console.log(appHtml)
        const html = template.replace(`<!--app-html-->`, appHtml)

        cxt.body = html
        cxt.status = 200
    } catch (e) {
        console.log(e)
        if (!global.IS_PROD) {
            global.vite.ssrFixStacktrace(e)
        }
        cxt.app.emit("error", new Error("server_html_error"), cxt, e)
    }
})

export default view
