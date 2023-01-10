/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 19:25:41
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-17 19:29:02
 * @Description:
 */
import { EditorView } from "codemirror"

export const theme = EditorView.baseTheme({
    "&": {
        height: "100%",
        textAlign: "left"
    }
})
