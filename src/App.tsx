import { RouterProvider } from 'react-router-dom';
import { routes } from './common/router/routes';
import './common/styles/global.scss';

export const App = () => {
  return <RouterProvider router={routes} />;
};
