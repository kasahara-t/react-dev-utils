import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className={`inline-flex rounded-full border bg-indigo-600 px-6 py-2 font-semibold text-slate-50`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
