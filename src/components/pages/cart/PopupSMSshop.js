import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/home.css";
import Button from "../../buttons/Button.styled";

function PopupSMSshop({ closePopup }) {
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
              <br />
              <h1>Message <span className="color-red">merchantName</span></h1>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry..
              </p>
            </div>
            <br />
            <br />
            <div className="block__form">
              <form action="#">
                <div className="bloc-field">
                  <label for="name">Your name</label><br />
                  <input type="text" name="username" className="text-field" />
                </div>
                <div className="bloc-field">
                  <label for="email">Your email</label><br />
                  <input type="email" name="email" className="text-field" />
                </div>
                <div className="bloc-field">
                  <label for="number">Phone number</label><br />
                  <input type="number" name="number" className="text-field" />
                </div>
                <div className="bloc-field">
                  <label for="message">Message</label><br />
                  <textarea name="textarea" className="text-field" ></textarea>
                </div>
                <div className="display-flex-center">
                  <Link to="#"> 
                    <Button
                      title='Place the order'
                      variant="link"
                      href="/fr//checkout"
                      maxWidth="300px"
                      margin='0'
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupSMSshop;
