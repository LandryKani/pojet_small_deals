import React, { useState } from 'react';
import '../../../assets/css/Merchants.css';
import search from '../../../assets/img/search.svg';
import Vector from '../../../assets/img/Vector.svg';
import Merchants from './Merchants';
import PageFilter from '../../Popups/PageFilter';
import ButtonPaginate from '../../buttons/ButtonPaginate';
import { MerchantsData } from '../../../utils/merchantsData';
import MerchantsPopup from './MerchantsPopup';




function MerchantList() {

    console.log('App started');

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div >
                {/* <!-- debut Zone de recherche--> */}
                <div className="head head__padding">
                    <div className="container__search display-flex-center">

                        <div className="input-icon">
                            <input className="input-search" type="text" placeholder="store name" />

                            <img src={search} alt="search" className="fa-search" />

                        </div>
                        <div ><img src={Vector} alt="f-search" className="bars" onClick={togglePopup} /></div>

                        {isOpen && <PageFilter
                            handleClose={togglePopup}
                            content={<MerchantsPopup />}
                        />}

                    </div>
                </div>
                {/* <!-- fin Zone de recherche--> */}

                <main className="container-merchant">

                    <div className="display-flex-center container-grid">
                        <div className="container">
                            <div className="count-title">
                                <h3 className="merchands-found">( <span className="count-merchants">300</span> ) marchants trouvés</h3>
                            </div>

                            <div className="grid-merchants display-grid">
                                {MerchantsData.map(merchant =>
                                    <Merchants image={merchant.image}
                                        name={merchant.name}
                                        description={merchant.description}
                                        link={merchant.link}
                                        ads={merchant.ads}
                                        stars={merchant.stars}
                                    />
                                )
                                }

                            </div>

                            <ButtonPaginate />
                        </div>
                    </div>

                </main>
                {/* <!-- debut du footer --> */}
            </div>
        </>
    )
}

export default MerchantList