import React from 'react'

function Paypal({ paypal }) {
    return (
        <div> <input type="radio" name="payment" id="PayPal" value="PayPal" />
            <label for="PayPal" className="PayPal item_choice display-block">
                <div className="radio_logo">

                    <div className="radio">
                        <div className='paymentName'>PayPal</div>
                    </div>
                    <p>You will be redirected to the PayPal website after submitting your order</p>
                    <div className="logo_payment">
                        <img src={paypal} alt="PayPal" className='logo_payment_img' />
                    </div>
                </div>
                <div className='cart_hide'>
                    <div className="card__information">
                        <div className="bloc-field">
                            <label for="email_Paypal" className="cart_label">PayPal email</label>
                            <input type="email" name="email_Paypal" placeholder='exemple@gmail.com' />
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Paypal