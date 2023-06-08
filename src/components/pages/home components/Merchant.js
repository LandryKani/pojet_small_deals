import React, {useState, useEffect} from "react";
import "../../../assets/css/footer.css";
import "../../../assets/css/home.css";
import "../../../assets/css/header.css";
import "../../../assets/css/Merchants.css";
import "../../../assets/css/Merchant.css";
import { Link } from "react-router-dom";
import share from '../../../assets/img/share.svg';
import like from '../../../assets/img/like.svg';
import store from "../../../assets/img/store.svg"
import { fetch_post } from '../../../utils/help_functions.mjs';
import { api_route} from '../../../utils/api_route';
import PopupShareIt from "../../Popups/PopupShareIt";

function Featured(featured) {
  const [openModal, setOpenModal] = useState(false);
  console.log("featured ", featured);
  const [postresponse, setPostResponse] = useState(null)
  console.log(api_route.shareProducts.url)

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("url_product", api_route.shareProducts.url + '/'+featured.id_product+'-'+featured.link_rewrite);

    fetch_post(api_route.shareProducts.url + '/'+featured.id_product+'-'+featured.link_rewrite,
      formdata,
      setPostResponse);
  },[])
  return (

    <div className="merchant" key={featured.id_product}>
    <div className="mouse-over">
      <div className="mouse-over-contain">
        <Link to={"advert/" +featured.id_product+'-'+featured.link_rewrite}><button>Détails</button></Link>
        <div className="display-flex-center ">
          <Link to="#" className="display-flex-center " onClick={() => setOpenModal(true)}>
            <img src={share} alt="share" /><span> Share</span>
          </Link>
          <Link to="favorites" className="display-flex-center "><img src={like} alt="like" /><span> Like </span></Link>
        </div>

      </div>

    </div>

    <div className="adverts-image"><img src={featured.default_image.medium.url} alt="merchent-image"
      className="adverts-image" /></div>
    <div className="merchant-detail">

      <h4 className="annonce-title">{featured.name}</h4>
      <div className="price-infos">
        {featured.price_currencies.map((price) => <h6 className="display-flex">{price.price}{price.reduction != 0 &&(
          <span>(-{price.reduction.toFixed(2)})</span>
        )}</h6>)}

        {/* {featured.reduction !== 0 && (
          <span>(-{`${featured.reduction.toFixed(2)} %`})</span>
        )
        } */}
      </div>
      <div className="store-informations">
        <p>
          <i className="far fa-clock"></i>
          {featured.date_add}
        </p>
        <p>
        <img src={store} alt="" />
          {/* {name} */}
        </p>
        <p>
          <i className="fa fa-location-dot"></i>
          {/* {location} */}
        </p>
      </div>
    </div>
    {openModal && <PopupShareIt closePopup={setOpenModal} sociaL_shares = {postresponse == null ? [] : postresponse.datas.social_share_links} />}

  </div>

  );
}

function Merchant({ featured_products }) {
  return (
    <>
      <div className="container-merchant">
        <h1 className="section__title">
          <span className="title">Featured featured</span>
        </h1>
        <div className="container">
            <div class="grid-merchants-view display-grid">
            {/* {featured_products.map(AdvertHome)} */}
            {featured_products.map(Featured)}

            {/* AdvertHome(featured) */}
            </div>
        </div>
      </div>
    </>
  );
}

export default Merchant;
