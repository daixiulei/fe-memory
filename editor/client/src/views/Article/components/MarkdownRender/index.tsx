/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 20:14:13
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 15:59:38
 * @Description:
 */
import React, { useEffect, useState } from "react"
import { renderPost } from "../../api"
import styles from "./index.module.less"

interface IProps {
    originContent: string
}

export default function MarkdownRender(props: IProps) {
    const { originContent } = props

    const [postDangerousHtml, setPostDangerousHtml] = useState("")

    async function getRenderedPost() {
        try {
            let renderedPost = await renderPost({
                content: originContent
            })
            setPostDangerousHtml(renderedPost)
        } catch (e) {}
    }

    useEffect(() => {
        getRenderedPost()
    }, [originContent])

    return (
        <div id="post" className={styles["post"]}>
            <div dangerouslySetInnerHTML={{ __html: postDangerousHtml }} className="post-content" id="article-container"></div>
        </div>
    )
}
