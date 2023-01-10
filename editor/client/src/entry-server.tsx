/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-19 09:12:03
 * @Description:
 */
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"

import App from "./App"
import "./index.css"
import "./assets/hexo/hexo.css"
import "./assets/hexo/hexoFont.css"

export function render(url: string, context: any) {
    return ReactDOMServer.renderToString(
        <StaticRouter location={url} basename="/view">
            <App />
        </StaticRouter>
    )
}
