import React, { useMemo, useState } from 'react';
import styles from './index.module.less';
import {
  FolderOpenTwoTone,
  FileTwoTone,
  CaretRightOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

export interface MenuTreeNode {
  name: string;
  path: string;
  type: 'dir' | 'file';
  children: MenuTreeNode[];
}

interface IProps {
  tree: MenuTreeNode;
  onClickFile: (path: string) => void;
}

export default function MenuTreeItem(props: IProps) {
  const { tree, onClickFile } = props;

  const [expand, setExpand] = useState(false);

  const icon = useMemo(() => {
    if (tree.type === 'dir') {
      return <FolderOpenTwoTone />;
    } else if (tree.type === 'file') {
      return <FileTwoTone />;
    }
  }, [tree]);

  function onClickItem(e: React.MouseEvent) {
    e.stopPropagation();
    if (tree.type === 'dir') {
      setExpand(!expand);
    } else {
      onClickFile(tree.path);
    }
  }

  return (
    <div className={styles['menu-tree__item']} onClick={onClickItem}>
      <div className={styles['menu-tree__info']}>
        {tree.type === 'dir' ? (
          <span className={styles['menu-tree__expand-icon']}>
            {expand ? (
              <CaretDownOutlined style={{ color: '#999' }} />
            ) : (
              <CaretRightOutlined style={{ color: '#999' }} />
            )}
          </span>
        ) : (
          <span className={styles['menu-tree__expand-placeholder']}></span>
        )}

        <span className={styles['menu-tree__info-icon']}>{icon}</span>
        {tree.name}
      </div>
      {expand && (
        <div className={styles['menu-tree__children-container']}>
          {tree.children?.length > 0 &&
            tree.children.map((item) => <MenuTreeItem tree={item} onClickFile={onClickFile} />)}
        </div>
      )}
    </div>
  );
}
