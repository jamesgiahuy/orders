import React from "react";
import HeaderContent from "../../components/Header";
import clsx from "clsx";
import style from "./Content.module.scss";
import HomePage from "../../Pages/HomePage/Home";

import { Routes, Route } from "react-router-dom";
import OrderPage from "../../Pages/OrderPages/OrderPage";
// import OrderPage from "./Pages/OrderPage";
const SidebarContent = () => {
  const classes = clsx(style.contentSidebar);

  return (
    <div className={classes}>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/orders" element={<OrderPage />}></Route>
      </Routes>
    </div>
  );
};

export default SidebarContent;
