import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./headerComponents/Header";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
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
