import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  {
    label: 'Id Generator',
    to: '/id-generator',
  },
];

export const Root = () => {
  return (
    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-flex">
      <div className="tw-w-72 tw-border-r tw-px-6 tw-pb-8 tw-pt-4">
        <div>
          <NavLink className="tw-bold" to="/">
            <span className="tw-truncate tw-text-xl tw-font-bold">React Dev Utils</span>
          </NavLink>
        </div>
        <nav className="tw-mt-10">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink className="tw-block" to={item.to}>
                  <span className="tw-truncate tw-font-semibold">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="tw-relative tw-flex tw-flex-grow">
        <header className="tw-absolute tw-left-0 tw-right-0 tw-flex tw-h-14 tw-items-center tw-justify-center tw-border-b">
          <span className="tw-font-semibold">header</span>
        </header>
        <main className="tw-mt-14 tw-flex-grow tw-px-8 tw-pb-8 tw-pt-4">
          <div className="tw-relative tw-h-full tw-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
