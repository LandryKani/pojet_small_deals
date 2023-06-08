import React, { useState } from 'react';
import '../../../assets/css/Merchant.css';
import Header from './Header';
import { advertsData } from '../../../utils/advertsData';
import PageFilter from '../../Popups/PageFilter';
import Vector from '../../../assets/img/Vector.svg';
import Adverts from '../advertsList/Adverts';
import AdvertsPopup from '../advertsList/AdvertsPopup';
import ButtonPaginate from '../../buttons/ButtonPaginate';
import { Link } from "react-router-dom";
import Merchant_review from './Merchant_review';
import Merchant_about from './Merchant_about';




function Merchant() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [page, setPage] = useState('adverts');

  const togglepage = (choise) => {
    setPage(choise);
  }


  return (
    <>
      <div >

        <Header />

        {/* debut sous menu */}

        <div className="menu_flex1" id="menu_flex1">
          <ul className="menu_flex">
            {/* <li><Link to="merchant" className="link active">Annonces</Link></li> */}
            <li><Link to="" className={page === 'adverts' ? 'link active' : 'link'} onClick={() => togglepage('adverts')} title="Adverts">Annonces</Link></li>
            <li><Link to="" className="about link" onClick={() => togglepage('about')} title="About" >About</Link></li>
            <li><Link to="" className="link" onClick={() => togglepage('review')} title="reviews">Avis</Link></li>
          </ul>
        </div>

        {/* fin sous menu */}


        <div className={page === 'adverts' ? 'container-merchant' : 'display-none'}  >
          <div className='container'>
            <div className='display-flex-end filter__merchant__view'><img src={Vector} alt="f-search" className="bars" onClick={togglePopup} /></div>

            {isOpen && <PageFilter
              handleClose={togglePopup}
              content={<AdvertsPopup />}
            />}
            {/* <div className="grid-merchants-view display-grid">
              {advertsData.map(advert =>
                <Adverts image_annonce={advert.image_annonce}
                  name={advert.name}
                  title={advert.title}
                  link={advert.link}
                  reduction={advert.reduction}
                  price1={advert.price1}
                  price2={advert.price2}
                  price3={advert.price3}
                  time={advert.time}
                  location={advert.location}
                  prices={advert.prices}
                />
              )
              }
            </div> */}
            <ButtonPaginate />

          </div>
        </div>

        <div className={page === 'review' ? 'display-block' : 'display-none'}>
          <Merchant_review />
        </div>

        <div className={page === 'about' ? 'display-block' : 'display-none'}>
          <Merchant_about />
        </div>

      </div>

    </>
  )
}

export default Merchant