import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BlogPage, Error, PageNotFound } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<BlogPage />} path="/" />
      <Route element={<Error />} path="/error/:statusCode?" />
      <Route element={<PageNotFound />} path="*" />
    </Routes>
  </BrowserRouter>
);
