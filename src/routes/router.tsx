import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import ErrorPage from './ErrorPage';
import { IdGeneratorPresenter } from '../features/id-generator/presenters/IdGeneratorPresenter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/id-generator" replace />,
      },
      {
        path: '/id-generator',
        element: <IdGeneratorPresenter />,
      },
    ],
  },
]);
