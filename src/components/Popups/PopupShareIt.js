import React, { useState } from "react";
import "../../assets/css/cart.css";
import "../../assets/css/footer.css";
import "../../assets/css/home.css";
import "../../assets/css/header.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Social(social_share) {
  return (
    // <Link to={{pathname:social_share.url}} title={social_share.label}>
    //   <div className={`circle__icons share_icons_${social_share.class}`}>
    //     <i className={`fa-brands fa-${social_share.class} size`}></i>
    //   </div>
    // </Link>
    <a href={social_share.url} target="blank">
      <div className={`circle__icons share_icons_${social_share.class}`}>
        <i className={`fa-brands fa-${social_share.class} size`}></i>
      </div>
    </a>
  );
}

function PopupShareIt({ closePopup, sociaL_shares }) {
  const [value, setValue] = useState("https://small-deals.com/annonces/name");
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="PopupBackground">
        <div className="popup_share_it">
          <div className="container">
            <div className="popup_header">
              <span
                className="icon-accordion"
                onClick={() => closePopup(false)}
              >
                +
              </span>
              <br />
              <br />
              <h3>Share this ad</h3>
              <p className="description">
                If you like this ad, share it with your friends.
              </p>
            </div>
            <br />
            <br />
            <div className="share__icons">
              <div className="share_icons_circle_icons">
                {/* <Link to="#" title="Twitter">
                  <div className="circle__icons share_icons_twitter">
                    <i className="fa-brands fa-twitter size"></i>
                  </div>
                </Link>
                <Link to="#" title="Facebook">
                  <div className="circle__icons share_icons_facebook">
                    <i className="fa-brands fa-facebook-f size"></i>
                  </div>
                </Link>
                <Link to="#" title="Youtube">
                  <div className="circle__icons share_icons_youtube">
                    <i className="fa-brands fa-youtube size"></i>
                  </div>
                </Link>
                <Link to="#" title="Whatsapp">
                  <div className="circle__icons share_icons_whatsapp">
                    <i className="fa-brands fa-whatsapp size"></i>
                  </div>
                </Link> */}

                {sociaL_shares.map(Social)}
              </div>
              <br />
              <br />
              <div className="input_text_share tooltip">
                <input
                  type="text"
                  // "https://small-deals.com/annonces/name"
                  value={value}
                  onChange={({ target: { value } }) => setValue(value)}
                  id="myInput"
                />
                <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                  <button onclick="myFunction()" onmouseout="outFunc()">
                    <span className="tooltiptext" id="myTooltip">
                      Copy to clipboard
                    </span>
                    <i className="fa-solid fa-paste"></i>
                  </button>
                </CopyToClipboard>
                {copied ? <span>copied</span> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupShareIt;
