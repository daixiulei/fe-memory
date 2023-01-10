/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 14:31:52
 * @Description:
 */
import path from "path"
export default {
    pathes: {
        clientRootPath: path.join(__dirname, "../../client"), // 客户端代码
        template: path.join(__dirname, "../../client/index.html"), // 客户端template
        dist: path.join(__dirname, "../../dist/client"), // 客户端打包输出路径
        distTemplate: path.join(__dirname, "../../dist/client/index.html"), // 客户端输出后的模板
        clientDistEntry: path.join(__dirname, "../../dist/client/entry-client.js"), // 打包后 ssr 客户端入口
        serverDistEntry: path.join(__dirname, "../../dist/server/entry-server.js"), // 打包后 ssr 浏览器端入口
        serverDevEntry: path.join(__dirname, "../../client/src/entry-server"), // ssr客户端入口
        postBaseDir: path.join(__dirname, "../../../source/_posts"), // 博客根目录
        hexoConfigBase: path.join(__dirname, "../../../_config.yml") // 配置文件目录
    }
}
