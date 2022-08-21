import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import './index.css';

export function render(url: string, context: any) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} basename="/view">
      <App />
    </StaticRouter>
  );
}
