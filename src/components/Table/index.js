import React from "react";
import style from "./Table.module.scss";
const Table = () => {
  return (
    <div className={style.tableWrap}>
      <div className={style.thead}>
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
          <li className={style.item100px}>
            <div>Out For Delivery</div>
          </li>
          <li className={style.item100px}>10/26/2021 03:00 p</li>
          <li className={style.item200px}> Jacob Jones</li>
          <li className={style.item200px}>(702) 555-0122</li>
          <li className={style.item200px}>10/26/2021 03:00 p</li>
          <li className={style.item200px}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </li>
          <li className={style.item100px}>5.0</li>
          <li className={style.item100px}>7</li>
          <li className={style.item100px}>
            <img src="/images/check.svg" />
          </li>
          <li className={style.item100px}>
            {" "}
            <img src="/images/close.svg" />
          </li>
          <li className={style.item100px}>
            <img src="/images/close.svg" />
          </li>
          <li className={style.item100px}>
            <img src="/images/close.svg" />
          </li>
          <li className={style.item100px}>
            <img src="/images/check.svg" />
          </li>
          <li className={style.item100px}>
            <img src="/images/vertical.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
