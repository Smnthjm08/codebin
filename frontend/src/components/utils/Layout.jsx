/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Render the nested route's component */}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
