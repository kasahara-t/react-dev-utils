import './styles/global.scss';
import { ThemeProvider } from './providers/theme/ThemeProvider';
import { RouterProvider } from './providers/router/RouterProvider';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </RecoilRoot>
  );
};
