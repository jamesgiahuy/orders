import style from "./SideBar.module.scss";
import clsx from "clsx";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import Catagory from "../../components/Catagory";

const Sidebar = () => {
  return (
    <div className={style.sidebarWrap}>
      <div className={style.logoSidebar}>
        <img src="/images/image 6.svg" />
      </div>
      <img src="/images/Line 79.svg" />
      <Link to="/orders" className={style.btnOrderSidebar}>
        <img src="/images/add file.svg" />
        <span>Create Order</span>
      </Link>
      <img src="/images/Line 79.svg" />
      <Catagory logo="/images/Home.svg" title="Home" />
      <Catagory logo="/images/Order.svg" title="Orders" />
      <Catagory logo="/images/Chat.svg" title="Messages" />
      <Catagory logo="/images/Patients.svg" title="Patients" />
      <Catagory logo="/images/Workers.svg" title="Workers" />
      <Catagory logo="/images/Doctors.svg" title="Doctors" />
      <Catagory logo="/images/Profile.svg" title="Profile" />
      <Catagory logo="/images/Fax.svg" title="Pharmacy Fax" />
      <Catagory logo="/images/Setting.svg" title="API Key" />

      <div className={style.copyright}>© 2021 RXdeliverednow</div>
    </div>
  );
};

export default Sidebar;
