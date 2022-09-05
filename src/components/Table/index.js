import React from "react";
import style from "./Table.module.scss";
import clsx from "clsx";
const Table = () => {
  const classes = clsx(style.item0px);

  const classtableHead = clsx(style.thead, style.theadStyle);

  const classOutForDeli = clsx(style.item100px, style.outForDeli);

  const classPatientName = clsx(style.item200px, style.patientName);

  const classReadyToPick = clsx(style.item100px, style.readyToPick);

  const classblue = clsx(style.item100px, style.blueColor);
  return (
    <div className={style.tableWrap}>
      <div className={classtableHead}>
        <ul className={style.theadWrap}>
          <div className={style.item100px}>Status</div>
          <div className={style.item100px}>Updated At</div>
          <div className={style.item200px}>Patient Name</div>
          <div className={style.item200px}>Patient Name</div>
          <div className={style.item200px}>Pickup At</div>
          <div className={style.item200px}>Destination</div>
          <div className={style.item100px}>Distance (miles)</div>
          <div className={style.item100px}>Quantity</div>
          <div className={style.item100px}>Refrigeration</div>
          <div className={style.item100px}>Controlled</div>
          <div className={style.item100px}>Hazardous</div>
          <div className={style.item100px}>Signature Required</div>
          <div className={style.item100px}>Leave At Door</div>
        </ul>
      </div>
      <div className={style.tbody}>
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>
            <span>Out For Delivery</span>
          </div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={classPatientName}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Pick</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Ship</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>Out For Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>In Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Order Placed</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classblue}>Ready To Pickup</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classOutForDeli}>Out For Delivery</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classblue}>Ready To Pickup</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
        <ul className={style.theadWrap}>
          <div className={classReadyToPick}>Ready To Ship</div>
          <div className={style.item100px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>Jacob Jones</div>
          <div className={style.item200px}>(702) 555-0122</div>
          <div className={style.item200px}>
            10/26/2021 <br /> 03:00 p
          </div>
          <div className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div className={style.item100px}>5.0</div>
          <div className={style.item100px}>7</div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/close.svg" />
          </div>
          <div className={style.item1000px}>
            <img src="/images/check.svg" />
          </div>
          <div className={classes}>
            <img src="/images/vertical.svg" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Table;
