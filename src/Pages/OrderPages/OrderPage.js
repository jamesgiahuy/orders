import React from "react";
import style from "./OrderPage.module.scss";
import Checkbox from "../../components/Checkbox";
import Label from "../../components/LabelInput";

const OrderPage = () => {
  return (
    <div className={style.container}>
      <h2>EDIT ORDER</h2>
      <div className={style.orderWrap}>
        <div className={style.checkBoxWrap}>
          <Checkbox title="In house" />
          <Checkbox title="On-Demand Delivery" />
          <Checkbox title="Shipping" />
        </div>
        <h3>Patient Information</h3>
        <div className={style.containerFluid}>
          <div className={style.wrapInformation}>
            <Label title="Phone Number" type="number" />
            <Label title="First Name" type="text" />
            <Label title="Last Name" type="text" />
          </div>
          <div className={style.wrapInformation}>
            <Label title="Adress" type="text" />
            <Label title="First Name" type="text" placeholder="--" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
