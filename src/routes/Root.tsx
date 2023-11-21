import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="flex absolute top-0 right-0 left-0 bottom-0">
      <nav className="w-1/12">
        <ul>
          <li>
            <NavLink className="block" to="/id-generator">
              Id Generator
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-grow">
        <div className="relative w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
