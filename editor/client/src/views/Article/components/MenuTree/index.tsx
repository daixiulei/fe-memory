import React, { useState, useEffect } from 'react';
import { queryMenuTree } from '../../api/index';
import MenuTreeItem, { MenuTreeNode } from './MenuTreeItem';
import styles from './index.module.less';

interface IProps {
  onClickFile: (path: string) => void;
}

export default function MenuTree(props: IProps) {
  const { onClickFile } = props;
  const [trees, setTrees] = useState<MenuTreeNode[]>([]);

  async function getTree() {
    try {
      let trees = await queryMenuTree();
      setTrees(trees);
    } catch (error) {}
  }

  useEffect(() => {
    getTree();
  }, []);

  return (
    <div className={styles['menu-tree__container']}>
      {trees.map((item) => (
        <MenuTreeItem tree={item} key={item.path} onClickFile={onClickFile} />
      ))}
    </div>
  );
}
