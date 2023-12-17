import { FC, useContext } from 'react';
import { ThemeContext } from '../../providers/theme/themeContext';
import { classNames } from '../../utils/utils';

export interface ThemeToggleButtonProps {
  className?: string;
}

export const ThemeToggleButton: FC<ThemeToggleButtonProps> = ({ className }) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggleButton must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.debug(`Theme changed to ${newTheme}`);
    setTheme(newTheme);
  };

  return (
    <button className={className} onClick={handleToggleTheme}>
      <span
        className={classNames(
          'tw-w-6 tw-h-6 tw-text-gray-700',
          theme === 'dark'
            ? 'tw-i-material-symbols-light-mode-outline-rounded'
            : 'tw-i-material-symbols-dark-mode-outline-rounded',
        )}
      />
    </button>
  );
};
