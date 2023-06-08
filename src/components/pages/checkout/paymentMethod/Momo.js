import React from 'react'

function Momo({ momo }) {
    return (
        <div>
            <input type="radio" name="payment" id="momo" value="MOMO" />
            <label for="momo" className="momo item_choice display-block">
                <div className="radio_logo">
                    <div className="radio">
                        <div className='paymentName'>MOMO</div>
                    </div>
                    <p>You will be redirected to the MTN website after submitting your order</p>
                    <div className="logo_payment">
                        <img src={momo} alt="MOMO" className='logo_payment_img' />
                    </div>
                </div>
                <div className='cart_hide'>
                    <div className="card__information">
                        <div className="bloc-field">
                            <label for="phone_number" className="cart_label">Phone number</label>
                            <input type="number" name="phone_number" placeholder='+237 6.....' />
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Momo