import { FC } from 'react';
import { classNames } from '../../utils/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: FC<SelectProps> = ({ children, className, ...props }) => {
  return (
    <select
      className={classNames(
        'tw-block tw-w-full tw-rounded-lg tw-border',
        'tw-border-gray-300 tw-bg-gray-50 tw-p-2.5 tw-text-sm tw-text-gray-900',
        'focus:tw-border-blue-500 focus:tw-ring-blue-500',
        // 'dark:tw-border-gray-600 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-400',
        // 'dark:focus:tw-border-blue-500 dark:focus:tw-ring-blue-500',
        className ?? '',
      )}
      {...props}
    >
      {children}
    </select>
  );
};
