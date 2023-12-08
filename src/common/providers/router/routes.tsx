import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../ui/page/ErrorPage';
import { IdGeneratorContainer } from '../../../features/id-generator';
import { FloatLayout } from '../../ui/layout/FloatLayout';

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
        element: <IdGeneratorContainer />,
      },
    ],
  },
]);
