/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-17 20:10:55
 * @Description:
 */
import React, { useEffect, useState, useRef } from "react"
import { EditorView, basicSetup } from "codemirror"
import { EditorState } from "@codemirror/state"
import { ViewUpdate } from "@codemirror/view"
import { markdown } from "@codemirror/lang-markdown"
import { theme } from "./theme"

import styles from "./index.module.less"

interface IMarkdownEditorOptions {
    doc?: string
    onChange?: (doc: string) => void
}

export default function MarkdownEditor(props: IMarkdownEditorOptions) {
    const { onChange } = props
    const codebody = useRef<HTMLDivElement>(null)
    const [codeString, setCodeString] = useState("")
    const [codeInstance, setCodeInstance] = useState<EditorView | null>(null)
    useEffect(() => {
        console.log(codeInstance)
        if (window && codebody && codebody.current!.children.length === 0 && !codeInstance) {
            const state = EditorState.create({
                extensions: [
                    basicSetup,
                    markdown(),
                    theme,
                    EditorView.updateListener.of((v: ViewUpdate) => {
                        const docString = v.state.doc.toString()
                        setCodeString(docString)
                        onChange?.(docString)
                    })
                ]
            })
            let instance = new EditorView({
                state: state,
                parent: codebody.current!
            })
            setCodeInstance(instance)
        }
    }, [])

    return <div className={styles["markdown-editor"]} ref={codebody}></div>
}
