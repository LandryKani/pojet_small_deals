import React from 'react'
import '../../../assets/css/placeOrder.css'

function PlaceTheOrder() {
    return (
        <div className='container head__padding'>
            <div className='congratulation'>
                <h1> Congratulation Oreol !</h1>
                <p>Your order has been successfully submitted. The seller will contact you for further information.</p>
                <p className='last_phrase'> Continue shopping<span className='last_phrase__or'> or </span>Check your orders.</p>
            </div>
        </div>
    )
}

export default PlaceTheOrder