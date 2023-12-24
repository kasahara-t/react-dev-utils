import { Navigate, createBrowserRouter } from 'react-router-dom';
import { FloatLayout } from '@features/shared/ui/layout/FloatLayout';
import { ErrorPage } from './pages/ErrorPage';
import { IdGeneratorPage } from './pages/IdGeneratorPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <FloatLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/id-generator" replace />,
      },
      {
        path: '/id-generator',
        element: <IdGeneratorPage />,
      },
    ],
  },
]);
