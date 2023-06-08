import React from 'react'
import { favoritesData } from '../../utils/favoritesData';
import Adverts from './advertsList/Adverts';
import ButtonPaginate from '../buttons/ButtonPaginate';

function Favorites() {
    return (
        <>
            <div >
                <div className="head">
                    <div className="header-favorite">
                        <h2>Mes favorites</h2>

                    </div>
                </div>

                <main className="container-merchant">

                    <div className="container">


                        {/* <!-- Debut grille des marchants --> */}

                        <div className="grid-merchants-view display-grid">
                            {favoritesData.map(advert =>
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
                        </div>
                        <ButtonPaginate />
                    </div>

                </main>
            </div>
        </>
    )
}

export default Favorites