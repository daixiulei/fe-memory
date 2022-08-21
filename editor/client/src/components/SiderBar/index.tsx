import React from 'react';
import {
  HighlightFilled,
  HighlightOutlined,
  ProfileOutlined,
  ProfileFilled,
} from '@ant-design/icons';

import Icon from '../Icon';
import './index.less';

import avater from '../../assets/svg/avater.svg';
// import editLine from '../../assets/svg/edit-box-line.svg';
// import editFill from '../../assets/svg/edit-box-fill.svg';
// import bookLine from '../../assets/svg/book-read-line.svg';
// import bookFill from '../../assets/svg/book-read-fill.svg';

export default () => {
  const menus = [
    {
      icon: <HighlightOutlined />,
      activeIcon: <HighlightFilled />,
      text: '文章',
      path: '/article',
    },
    {
      icon: <ProfileOutlined />,
      activeIcon: <ProfileFilled />,
      text: '模板',
      path: '/template',
    },
  ];
  return (
    <div className="sider-bar">
      <img className="sider-bar__avater" src={avater} />
      <div className="sider-bar__menu">
        {menus.map((item) => (
          <Icon
            key={item.text}
            icon={item.icon}
            activeIcon={item.activeIcon}
            text={item.text}
            path={item.path}
          ></Icon>
        ))}
      </div>
    </div>
  );
};
