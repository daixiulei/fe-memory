/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 14:56:09
 * @Description:
 */
import React, { useState, useEffect } from "react"
import styles from "./index.module.less"
import MenuTree from "./components/MenuTree"
import MarkdownEditor from "./components/MarkdownEditor"
import MarkdownRender from "./components/MarkdownRender"

export default () => {
    const [componentReady, setComponentReady] = useState(false)
    const [editorText, setEditorText] = useState("")

    useEffect(() => {
        setComponentReady(!!document.visibilityState)
    }, [])

    function onClickFile(path: string) {
        console.log(path)
    }

    function onEditorContentChange(value: string) {
        console.log(value)
        setEditorText(value)
    }

    return (
        <div className={styles["article"]}>
            <div className={styles["article-tree"]}>
                <MenuTree onClickFile={onClickFile} />
            </div>
            <div className={styles["article-main"]}>
                <div className={styles["article-main__editor"]}>{window && <MarkdownEditor onChange={onEditorContentChange} />}</div>
                <div className={styles["article-main__preview"]}>
                    <MarkdownRender originContent={editorText} />
                </div>
            </div>
        </div>
    )
}
