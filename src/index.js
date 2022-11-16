import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "antd/dist/antd.min.css";
import "./index.css";

import UserProvider from "./components/context/UserContext";
const el = document.querySelector("#root");

const root = ReactDOM.createRoot(el);

root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
