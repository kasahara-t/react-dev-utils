import { FC, MouseEventHandler } from 'react';
import { classNames } from '@common/utils/utils';

export interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button
      className={classNames(
        'tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent',
        'tw-bg-blue-100 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-blue-900',
        'hover:tw-bg-blue-200 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-5',
      )}
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  );
};
