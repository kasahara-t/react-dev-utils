import { RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import './styles/global.scss';

export const App = () => {
  return <RouterProvider router={routes} />;
};
