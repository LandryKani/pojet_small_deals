import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import share from '../../../assets/img/share.svg';
import like from '../../../assets/img/like.svg';
import PopupShareIt from "../../Popups/PopupShareIt";
import store from "../../../assets/img/store.svg"
import { fetch_post } from '../../../utils/help_functions.mjs';
import { api_route } from '../../../utils/api_route';

function Adverts({ ads }) {

    const [openModal, setOpenModal] = useState(false);
    const [postresponse, setPostResponse] = useState(null)
  console.log(api_route.shareProducts.url)

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("url_product", api_route.shareProducts.url + "/1-produit-de-test");

    fetch_post(api_route.shareProducts.url + "/1-produit-de-test?id_lang=1",
      formdata,
      setPostResponse);
  },[])
    return (
        <>
            <div className="merchant" key={ads.id_product}>
                <div className="mouse-over">
                    <div className="mouse-over-contain">
                        <Link to="advert"><button>Détails</button></Link>
                        <div className="display-flex-center ">
                            <Link to="" onClick={() => setOpenModal(true)} className="display-flex-center">
                                <img src={share} alt="share" /> <span>Share</span>
                            </Link>
                            <Link to="favorites" className="display-flex-center" ><img src={like} alt="like" /> <span>Like</span></Link>
                        </div>

                    </div>

                </div>

                <div className="adverts-image">
                {ads.flags.discount && (
                                    // <div className='new-ad display-flex-align-center '> {ads.condition} </div>
                                    <div className='reduction-ad  '> {ads.flags.discount.label} </div>
    )
                                }
                                {ads.flags.new && (
                                    // <div className='new-ad display-flex-align-center '> {ads.condition} </div>
                                    <div className='new-ad  '> {ads.flags.discount.label} </div>
    )
                                }
                    <img src={ads.default_image.medium.url} alt="merchent-image"
                    className="adverts-image" /></div>
                <div className="merchant-detail">

                    <h4 className="annonce-title">{ads.name}</h4>
                    <div className="price-infos">
                    {ads.price_currencies.map((price) => <h6 className="display-flex">{price.price}{price.reduction != 0 &&(
          <span>(-{price.reduction.toFixed(2)})</span>
        )}</h6>)}
                    </div>
                    <div className="store-informations">
                        <p>
                            <i className="far fa-clock"></i>
                            {ads.date_add}
                        </p>
                        <p>
                            <img src={store} alt="" />
                            {}
                        </p>
                        <p>
                            <i className="fa fa-location-dot"></i>
                            {}
                        </p>
                    </div>
                </div>
                {openModal && <PopupShareIt closePopup={setOpenModal} sociaL_shares = {postresponse == null ? [] : postresponse.datas.social_share_links} />}

            </div>
        </>
    )
}

export default Adverts