import React from 'react';

import './index.less';

interface ComponentProps {
  children?: React.ReactNode;
  sider?: any;
  header?: any;
}

export default ({ children, header }: ComponentProps) => {
  return (
    <div className="layout">
      <div className="layout-header">{header}</div>
      <div className="layout-content">{children}</div>
    </div>
  );
};
