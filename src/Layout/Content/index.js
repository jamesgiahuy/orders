import React from "react";
import HeaderContent from "../../components/Header";
import clsx from "clsx";
import style from "./Content.module.scss";
import Main from "../../components/Main";
import Table from "../../components/Table";

const SidebarContent = () => {
  const classes = clsx(style.contentSidebar);

  return (
    <div className={classes}>
      <HeaderContent />
      <Main />
      <Table />
    </div>
  );
};

export default SidebarContent;
