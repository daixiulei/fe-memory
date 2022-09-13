import React, { useState, useEffect } from 'react';
import styles from './index.module.less';
import MenuTree from './components/MenuTree';
import MarkdownEditor from './components/MarkdownEditor';

export default () => {
  const [componentReady, setComponentReady] = useState(false);

  useEffect(() => {
    setComponentReady(!!document.visibilityState);
  }, []);

  function onClickFile(path: string) {
    console.log(path);
  }
  return (
    <div className={styles['article']}>
      <div className={styles['article-tree']}>
        <MenuTree onClickFile={onClickFile} />
      </div>
      <div className={styles['article-main']}>
        <div className={styles['article-main__editor']}>{window && <MarkdownEditor />}</div>
        <div className={styles['article-main__preview']}></div>
      </div>
    </div>
  );
};
