import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { routes } from './routes';
import './global.scss';

export const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  );
};
