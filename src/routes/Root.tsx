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
    <div className="absolute bottom-0 left-0 right-0 top-0 flex">
      <div className="w-72 border-r px-6 pb-8 pt-4">
        <div>
          <NavLink className="bold" to="/">
            <span className="truncate text-xl font-bold">React Dev Utils</span>
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
      <div className="relative flex flex-grow">
        <header className="absolute left-0 right-0 flex h-14 items-center justify-center border-b">
          <span className="font-semibold">header</span>
        </header>
        <main className="mt-14 flex-grow px-8 pb-8 pt-4">
          <div className="relative h-full w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
