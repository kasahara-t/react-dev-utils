import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import '@lib/i18n/setting';
import './global.scss';
import { routes } from './routes';

export const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  );
};
