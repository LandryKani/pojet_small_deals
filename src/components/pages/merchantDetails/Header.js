import React, {useState} from 'react';
import p_image from '../../../assets/img/p-im.svg';
import '../../../assets/css/header_merchant.css';
import PopupMerchant from './PopupMerchant';
import PopupSMSshop from '../advertDetails/PopupSMSshop';
import { Link } from "react-router-dom";
import PopupMessageMerch from './PopupMessageMerch';

function Header() {
  const [openModalMerchant, setOpenModalMerchant] = useState(false);
  const [openModalMerchantMessage, setOpenModalMerchantMessage] = useState(false);

  return (
    <>
      <div className="head-view">
        <div className="head-view-merchant display-flex-end">
          <div className="div-image-p display-flex-center">
            <img src={p_image} alt="image" className="image-p" />
          </div>
          <div className="div-bloc-text">
            <div className="div-text">
              <h3>Parma shop</h3>
              <h4>+39 339 641 1xxx</h4>
              <p>(1,4K) annonces</p>
              <h4>Douala, Cameroun</h4>

              <div className="stars-div">
                <ul className="stars">
                  <li>
                    <i className='fas fa-star'></i>
                  </li>
                  <li>
                    <i className='fas fa-star'></i>
                  </li>
                  <li>
                    <i className='fas fa-star'></i>
                  </li>
                  <li>
                    <i className='fas fa-star'></i>
                  </li>
                  <li>
                    <i className='fas fa-star'></i>
                  </li>
                  <li><span className="count-likes">(18)</span></li>
                </ul>

              </div>
            </div>

            <div>
              <button className="btn-message" onClick={() => setOpenModalMerchantMessage(true)}><i className="fa-solid fa-comment"></i> Message Owner Shop</button>
            </div>

            {openModalMerchantMessage && <PopupSMSshop
                closePopup={setOpenModalMerchantMessage}
                merchantName='Parma Shop'
                title="Message"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"
                PopupContent={<PopupMessageMerch />}
            />}

          </div>

        </div>

        <div className="message">
        <Link to='#' onClick={() => setOpenModalMerchant(true)}><p>Report this shop &nbsp;<i className="fas fa-comment"></i></p></Link>
        </div>
        {openModalMerchant && <PopupSMSshop
                closePopup={setOpenModalMerchant}
                merchantName='Parma Shop'
                title="Report"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting"
                PopupContent={<PopupMerchant />}
            />}
      </div>
    </>
  )
}

export default Header