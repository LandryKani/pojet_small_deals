import React from 'react'
import { Link } from 'react-router-dom'


function MerchantContact({merchant, contact1, contact2, website}) {
    
    return (
        <div className="merchant__contact  ">
            <div className="block__title">Add by</div>
            <div className="block_contact_number  display-flex-center">
                <div className="viazi__name ">
                    <img src="./assets/img/store.svg" alt="" /> <Link to="#" title="Viazizashop">{merchant}</Link>
                </div>
                <div className="phone_number">
                    <div className='phone_number_item'><i className="fa-solid fa-phone"> </i> <Link to="#" title="694775920">
                        {contact1}</Link>
                    </div>
                    <div className='phone_number_item'><i className="fa-brands fa-whatsapp color_whatsapp"> </i> <Link to="#"
                        title="652618994"> {contact2}</Link>
                    </div>
                </div>
                <div className="link__site">
                    <Link to="/merchant" title="https://viaziza.com">{website}</Link>
                </div>
            </div>
        </div>
    )
}

export default MerchantContact