// Layout.js

import React from "react";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
