import React, { useState, useEffect } from 'react';
import ButtonPaginate from '../../buttons/ButtonPaginate';
import '../../../assets/css/Adverts.css';
import PageFilter from '../../Popups/PageFilter';
import search from '../../../assets/img/search.svg';
import Vector from '../../../assets/img/Vector.svg';
import Adverts from './Adverts';
import AdvertsPopup from './AdvertsPopup';
import { advertsData } from '../../../utils/advertsData';
import AdvertsMenuFilter from './advertsMenuFilter';
import { fetch_get } from '../../../utils/help_functions.mjs';
import { api_route } from '../../../utils/api_route';
import AdvertFeaturedProduct from '../advertDetails/AdvertFeaturedProduct';

var id;
function AdsCategory(ads) {
  console.log("adverts cat", ads);

  return (
    <Adverts ads={ads} />
  )

}


function AdvertsList() {
  const [cat, setCat] = useState(3);
  console.log("De nouveau le setCat", cat)
  id = cat;
  // console.log("voici l'id de la categorie", id)
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [responsead, setResponsead] = useState(null)
  useEffect(() => {
    fetch_get(api_route.adverts.url + cat, setResponsead);

  })

  const advertsL = (responsead == null ? [] : responsead.datas.products);
  console.log("ce qui est dans url", api_route.adverts.url + id)

  const countads = advertsL.length; //à changer
  console.log("nb produits trouvés", countads)

  // Pour les categories

  const [responsecat, setResponsecat] = useState(null)

  useEffect(() => {
    if (responsecat === null) {
      fetch_get(api_route.categories.url, setResponsecat);
    }
  }, responsecat)
  if (responsead === null) {
    // return <h1 className='loadingComponent'>Loading...</h1>
    return (
      <>
        <h1 className="loadingComponent">
          <i class="fa-solid fa-spinner"></i>
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="head head__padding">
        <div className="container__search display-flex-center">
          <div className="input-icon">
            <input className="input-search" type="text" placeholder="store name" />
            <img src={search} alt="search" className="fa-search" />
          </div>
          <div><img src={Vector} alt="f-search" className="bars" onClick={togglePopup} /></div>
          {isOpen && <PageFilter
            handleClose={togglePopup}
            content={<AdvertsPopup advertsfacet={responsead == null ? [] : responsead.datas.advertfacet} />}
          />}
        </div>
      </div>

      <div className="container-merchant">

        <div className="container">

          <AdvertsMenuFilter advertscat={responsecat == null ? [] : responsecat.datas.categories} setCat={setCat} />


          <div className="count-title">
            <h3 className="merchands-found">( <span className="count-merchants">{countads}</span> ) annonces trouvés</h3>
          </div>

              <div className="grid-merchants-view display-grid">
                {advertsL.map(AdsCategory)}
              </div>


              {/* <ButtonPaginate pageCount={pageCount} handlePageClick={handlePageClick} /> */}
        </div>

      </div>
    </>
  )
}

export default AdvertsList