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
    <div className="flex absolute top-0 right-0 left-0 bottom-0">
      <div className="w-72 border-r px-6 pt-4 pb-8">
        <div>
          <NavLink className="bold" to="/">
            <span className="truncate font-bold text-xl">React Dev Utils</span>
          </NavLink>
        </div>
        <nav className="mt-10">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink className="block" to={item.to}>
                  <span className="truncate font-semibold">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-grow flex relative">
        <header className="h-14 absolute left-0 right-0 border-b flex justify-center items-center">
          <span className="font-semibold">header</span>
        </header>
        <main className="flex-grow mt-14 pt-4 px-8 pb-8">
          <div className="relative w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
