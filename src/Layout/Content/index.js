import React from "react";
import HeaderContent from "../../components/Header";
import clsx from "clsx";
import style from "./Content.module.scss";
import Main from "../../components/Main";
import Table from "../../components/Table";
import Footer from "../Footer";

const SidebarContent = () => {
  const classes = clsx(style.contentSidebar);

  return (
    <div className={classes}>
      <HeaderContent />
      <Main />
      <Table />
      <Footer />
    </div>
  );
};

export default SidebarContent;
