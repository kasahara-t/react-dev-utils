import React, { FC, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex rounded-full border bg-indigo-600 px-6 py-2 font-semibold text-slate-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
