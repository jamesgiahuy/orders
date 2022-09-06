import React from "react";
import style from "./Label.module.scss";
const Label = (props) => {
  const { title, type } = props;
  return (
    <div className={style.labelInputWrap}>
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} />
    </div>
  );
};

export default Label;
