/*
 * @Author: xiulei.dai
 * @Date: 2022-09-17 12:04:18
 * @LastEditors: xiulei.dai
 * @LastEditTime: 2022-09-18 15:43:31
 * @Description:
 */
import React from "react"

import styles from "./index.module.less"

interface ComponentProps {
    children?: React.ReactNode
    sider?: any
    header?: any
}

export default ({ children, header }: ComponentProps) => {
    return (
        <div className={styles["layout"]}>
            <div className={styles["layout-header"]}>{header}</div>
            <div className={styles["layout-content"]}>{children}</div>
        </div>
    )
}
