import React, { useState } from 'react';
import './index.less';

interface ComponentProps {
  icon?: any;
  activeIcon?: any;
  text?: string;
  path?: string;
  color?: string;
}

export default ({ icon, activeIcon, text, path, color = '#fff' }: ComponentProps) => {
  const [currentIcon, setCurrentIcon] = useState(icon);
  return (
    <div
      className="icon"
      onMouseOver={() => setCurrentIcon(activeIcon)}
      onMouseOut={() => setCurrentIcon(icon)}
      style={{ color: color }}
    >
      <div>{currentIcon}</div>
      <div className="icon__text">{text}</div>
    </div>
  );
};
