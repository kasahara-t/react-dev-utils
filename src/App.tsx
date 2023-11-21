import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
