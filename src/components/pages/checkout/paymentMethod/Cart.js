import React from 'react'
import { Link } from 'react-router-dom'

function Cart({visa, discover, masterBlue, masterYellow}) {
    return (
        <div> <input type="radio" name="payment" id="cart" value="PayPal" />
            <label for="cart">
                <div className="credit_cart">
                    <div className="item_choice_cart">
                        <div className="radio">
                            <div className='paymentName'>Pay with Credit Card</div>
                        </div>
                        <div className="logo_payment">
                            <img src={visa} alt="VISA" className='logo_payment_img0 visa' />
                            <img src={discover} alt="DISCOVER" className='logo_payment_img0' />
                            <img src={masterBlue} alt="MASTER 1" className='logo_payment_img0 master_1' />
                            <img src={masterYellow} alt="MASTER 2" className='logo_payment_img0' />
                        </div>
                    </div>
                    <div className='cart_hide'>
                        <div className="card__information">
                            <div className="bloc-field">
                                <label for="card_number" className="cart_label">Card number</label>
                                <input type="number" name="card_number" placeholder='1234-5678 .....' />
                            </div>
                            <div className="bloc-field">
                                <label for="exp_date" className="cart_label">Expiration Date</label>
                                <input type="text" name="exp_date" placeholder='MM/YY' />
                            </div>
                            <div className="bloc-field">
                                <label for="password" className="cart_label">Card Security Code</label>
                                <input type="password" name="password" placeholder='***' />
                            </div>
                            <div className="bloc-field">
                                <Link to="#" > <h4 className='color-blue'>What is the card security code ?</h4> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Cart