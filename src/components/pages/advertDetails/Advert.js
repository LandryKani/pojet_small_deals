import React , { useState, useEffect } from 'react';
import '../../../App.css';
import '../../../assets/css/product.css';
import '../../../assets/css/Merchant.css';
import AdvertComments from './AdvertComments';
import AdvertFeaturedProduct from './AdvertFeaturedProduct';
import AdvertDetails from './AdvertDetails';


function Advert(){
    
    const [response, setResponse] = useState(null);

    return (
        <>
            <div className='head__padding '>
                <div className="block__product_info container">
                    <AdvertDetails />
                    <AdvertComments />
                </div>
            </div>
        </>
    )
}

export default Advert