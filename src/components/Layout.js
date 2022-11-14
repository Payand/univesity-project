import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </>
  );
};

export default Layout;
