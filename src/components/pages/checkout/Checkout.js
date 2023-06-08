import React from 'react'
import '../../../assets/css/checkout.css'
import Button from '../../buttons/Button.styled'
import { Link } from "react-router-dom";
import om from '../../../assets/img/OM-logo.jpg'
import momo from '../../../assets/img/MOMO-logo.jpg'
import paypal from '../../../assets/img/paypal-logo.jpg'
import visa from '../../../assets/img/visa-logo.jpg'
import discover from '../../../assets/img/discover-logo.png'
import masterBlue from '../../../assets/img/Mastercard-blue-Logo.png'
import masterYellow from '../../../assets/img/Mastercard-yellow-Logo.png'
import Momo from './paymentMethod/Momo';
import OM from './paymentMethod/OM';
import Paypal from './paymentMethod/Paypal';
import Cart from './paymentMethod/Cart';

function Checkout() {
    return (
        <div className=" head__padding">
            <div className="container">
                <div className="checkout">
                    <h1>Congratulations! You've made a smart choice.</h1>
                    <form action="#" method="post">
                        <div className='block__payement_methode'>
                            <h2>Payment Method</h2>
                            <Momo momo={momo} />
                            <OM om={om} />
                            <Paypal paypal={paypal} />
                            <Cart 
                                visa={visa}
                                discover={discover}
                                masterBlue={masterBlue}
                                masterYellow={masterYellow}
                            />
                            <div className='display-flex'>
                                <div className='circle__icons lock'>
                                    <i className="fa-solid fa-lock color-blue"></i>
                                </div>
                                <p> We protect your payment information using encryption to provider bank-level security. </p>
                            </div>
                        </div>
                        <div className="order__summary">
                            <h2>Order Summary</h2>
                            <div className='display-flex-align-center user_price'>
                                <i className="fa-solid fa-star"> </i> SILVER  <span className="purple"> 4999 XAF /Month</span> </div>
                            <select name="" id="" className='select_name'>
                                <option value="">SILVER</option>
                                <option value="FOZEU">FOZEU</option>
                                <option value="PAGOU">PAGOU</option>
                                <option value="NYOBE">NYOBE</option>
                            </select>
                            <div className="more__info">
                                <div className="more__info_item display-align">
                                    <div className='pricing_icon display-flex-align-center'>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>60 regular ads</p>
                                </div>
                                <div className="more__info_item display-align">
                                    <div className='pricing_icon display-flex-align-center'>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>02 featured ads</p>
                                </div>
                                <div className="more__info_item display-align">
                                    <div className='pricing_icon display-flex-align-center'>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>04 top ads</p>
                                </div>
                                <div className="more__info_item display-align">
                                    <div className='pricing_icon display-flex-align-center'>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Basic support</p>
                                </div>
                            </div>
                        </div>
                        <div className="display-flex-center">
                            <Link to="/placeOder">
                                <Button
                                    title='Complete'
                                    variant="link"
                                    href="/checkout"
                                    margin="0"
                                    maxWidth="300px"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Checkout