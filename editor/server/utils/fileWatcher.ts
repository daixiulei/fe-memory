/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-17 20:45:09
 * @Description:
 */
import chokidar from "chokidar"
import fs from "fs"
import path from "path"

import config from "./config"

const dotFileReg = /(^|[\/\\])\../

global.POST_MENU_TREE = ""

function getBaseTree(dirPath) {
    try {
        let contents = fs.readdirSync(dirPath, "utf8")
        contents = contents.filter(item => !dotFileReg.test(item))

        let fileList = contents.map(item => {
            let joinPath = path.join(dirPath, item)
            let stats = fs.statSync(joinPath)
            if (stats.isDirectory()) {
                return {
                    path: joinPath,
                    name: item,
                    type: "dir",
                    children: getBaseTree(joinPath)
                }
            } else {
                return {
                    path: joinPath,
                    name: item,
                    type: "file"
                }
            }
        })
        return fileList
    } catch (e) {
        console.log(e)
    }
}

function runWatcher() {
    const watcher = chokidar.watch(config.pathes.postBaseDir, {
        ignored: dotFileReg,
        persistent: true
    })

    global.POST_MENU_TREE = getBaseTree(config.pathes.postBaseDir)

    watcher
        .on("add", () => {
            global.POST_MENU_TREE = getBaseTree(config.pathes.postBaseDir)
        })
        .on("addDir", () => {
            global.POST_MENU_TREE = getBaseTree(config.pathes.postBaseDir)
        })
        .on("unlink", () => {
            global.POST_MENU_TREE = getBaseTree(config.pathes.postBaseDir)
        })
        .on("unlinkDir", () => {
            global.POST_MENU_TREE = getBaseTree(config.pathes.postBaseDir)
        })
}

export default {
    runWatcher
}
