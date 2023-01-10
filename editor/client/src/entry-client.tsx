/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-19 09:12:17
 * @Description:
 */
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import "./assets/hexo/hexo.css"
import "./assets/hexo/hexoFont.css"

ReactDOM.hydrateRoot(
    document.getElementById("root")!,
    <React.StrictMode>
        <BrowserRouter basename="/view">
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
