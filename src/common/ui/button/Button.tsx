import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="tw-inline-flex tw-rounded-full tw-border tw-bg-indigo-600 tw-px-6 tw-py-2 tw-font-semibold tw-text-slate-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
