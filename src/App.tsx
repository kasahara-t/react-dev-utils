import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
