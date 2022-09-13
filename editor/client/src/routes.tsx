import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Article from './views/Article';
import Template from './views/Template';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Article />}></Route>
      <Route path="/template" element={<Template />}></Route>
    </Routes>
  );
};
