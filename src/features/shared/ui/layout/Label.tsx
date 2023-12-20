import { classNames } from '@common/utils/utils';
import { FC, ReactNode } from 'react';

export interface LabelProps {
  children: ReactNode;
}

export const Label: FC<LabelProps> = ({ children }) => {
  return (
    <span
      className={classNames(
        'tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900',
        'tw-cursor-pointer',
        // "dark:tw-text-white"
      )}
    >
      {children}
    </span>
  );
};
