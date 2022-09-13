import React from 'react';

import logo from '../../assets/svg/avater.svg';

import styles from './index.module.less';
import SimpleMenu from '../SimpleMenu';

console.log(styles);

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.slogen}>
        <img src={logo} />
        <div className={styles['header-slogen']}>Hexo Editor</div>
      </div>
      <SimpleMenu />
    </header>
  );
};
