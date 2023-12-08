import './styles/global.scss';
import { ThemeProvider } from './providers/theme/ThemeProvider';
import { RouterProvider } from './providers/router/RouterProvider';

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
};
