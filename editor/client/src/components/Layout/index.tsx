import React from 'react';

import './index.less';

interface ComponentProps {
  children?: React.ReactNode;
  sider?: any;
  header?: any;
}

export default ({ children, sider, header }: ComponentProps) => {
  console.log(sider);
  return (
    <div className="layout">
      {/* <div className="layout-sider">{sider}</div> */}
      <div className="layout-header">{header}</div>
      <div className="layout-content">{children}</div>
    </div>
  );
};
