import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Root } from '../ui/layout/Root';
import { ErrorPage } from '../ui/page/ErrorPage';
import { IdGeneratorContainer } from '../../features/id-generator';

export const routes = createBrowserRouter([
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
        element: <IdGeneratorContainer />,
      },
    ],
  },
]);
