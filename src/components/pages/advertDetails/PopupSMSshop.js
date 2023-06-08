import React, { useState } from "react";
import "../../../assets/css/popup__sms_shop.css";
import "../../../assets/css/home.css";

function PopupSMSshop({ closePopup, title, merchantName, description, PopupContent }) {
  return (
    <>
      <div className="PopupBackground">
        <div className="popup_share_it popup__sms_shop container">
          <div className="">
            <div className="popup_header">
              <span
                className="icon-accordion"
                onClick={() => closePopup(false)}
              >
                +
              </span>
              <br />
              <h1>{title} <span className="color-red">{merchantName}</span></h1>
              <p className="description">
                {description}
              </p>
            </div>
            <br />
            {PopupContent}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupSMSshop;
