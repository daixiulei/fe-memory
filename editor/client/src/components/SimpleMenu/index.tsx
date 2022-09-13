import React, { useMemo } from 'react';

import * as router from 'react-router-dom';

import styles from './index.module.less';

export default () => {
  const location = router.useLocation();
  const navigate = router.useNavigate();

  const menus = useMemo(() => {
    function onNavigate(path: string) {
      navigate(path);
    }
    const menuList = [
      {
        path: '/',
        name: '文章',
      },
      {
        path: '/template',
        name: '模板',
      },
    ];

    let currentPath = location.pathname;

    return menuList.map((menu) => (
      <div
        className={`${styles['menu-item']} ${
          currentPath === menu.path ? styles['menu-item__active'] : ''
        }`}
        onClick={() => onNavigate(menu.path)}
      >
        {menu.name}
      </div>
    ));
  }, [location, navigate]);

  return <div className={styles['simple-menu']}>{menus}</div>;
};
