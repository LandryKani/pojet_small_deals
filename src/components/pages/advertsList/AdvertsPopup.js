import React from 'react';
import '../../../assets/css/Adverts.css';
import PriceRange from '../../buttons/PriceRange';


function AdvertsPopup() {
    return (
        <>
            <div className="menu">
                <div className="item">
                    <h4>informations for more searches</h4>
                </div>
                <div className="item">
                    <select name="" id="">
                        <option value="">Add Type</option>
                    </select>
                </div>
                <div className="item">
                    <select name="" id="">
                        <option value="">Cathegory</option>
                    </select>
                </div>
                <div className="item">
                    <select name="" id="">
                        <option value="">City</option>
                    </select>
                </div>
                <div className="item">
                    <select name="" id="">
                        <option value="">Currency</option>
                    </select>
                </div>
                <div className="item">
                    <h4>price range</h4>
                    <PriceRange />
                </div>

                <div className="item">
                    <button className="btn-search-filter">Apply Filter</button>
                </div>

            </div>
        </>
    )
}

export default AdvertsPopup