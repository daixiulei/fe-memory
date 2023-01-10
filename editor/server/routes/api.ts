/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-19 09:36:01
 * @Description:
 */
import Router from "koa-router"
import Hexo from "hexo"
import path from "path"

const hexo = new Hexo(process.cwd(), {
    config: path.join(path.join(process.cwd(), "./_config.yml"))
})

hexo.init()

const api = new Router()

api.get("/query", cxt => {
    cxt.body = "query api"
})

api.get("/menutree", cxt => {
    cxt.body = global.POST_MENU_TREE
    cxt.status = 200
})

api.post("/render/post", async cxt => {
    let body = (cxt.request as any).body
    // let result = await hexo.render.render({
    //     text: body.content,
    //     engine: "md"
    // })

    let result = await hexo.render.render({
        path: path.join(process.cwd(), "source/_posts/hello-world.md")
    })

    cxt.body = result
    cxt.status = 200
})

export default api
