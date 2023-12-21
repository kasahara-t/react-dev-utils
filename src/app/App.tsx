import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './global.scss';
import { routes } from './routes';

export const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  );
};
