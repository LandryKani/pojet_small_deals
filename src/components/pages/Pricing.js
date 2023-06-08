import React from 'react'
import '../../assets/css/footer.css'
import '../../assets/css/home.css'
import '../../assets/css/cart.css'
import '../../assets/css/faq.css'
import { Link } from "react-router-dom";


function Pricing() {
  return (
    <>
      <div className="pricing-plan">
        <div className="container">
            <h1 className="style_title">
                Pick a Pricing Plan
            </h1>
                <p className="style_description">
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem.
                </p>
                <br/>
            <div className="pricing-plan-wrapper">
                <div className="font-square-white">
                    <div className="square-white">
                            <p>Free</p>
                            <p><b> 00 XAF </b> /Month</p>
                    </div>
                    <ul>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">10 regular ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">07 featured ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">01 top ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Limited support</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Post  directly on YouTube</span></li>
                        <li>
                            <Link to="checkout" className="subscribe_now banner__text_btn">
                                subscribe now
                                <span className="icon__arrow_right">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="font-square-white">
                    <div className="square-white">
                        <p>SILVER</p>
                        <p><b>4999 XAF </b>/Month</p>
                    </div>
                    <ul>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">60 regular ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">02 featured ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">04 top ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Basic support</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Post  directly on YouTube</span></li>
                        <li>
                            <Link to="checkout" className="subscribe_now banner__text_btn">
                                subscribe now
                                <span className="icon__arrow_right">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="font-square-white">
                    <div className="square-white-D">
                        <p>RECOMMANDED</p>
                        <p> GOLD</p>
                        <p><b> 7999 XAF </b>/Month</p>
                    </div>
                    <ul>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text"> 10 regular ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text"> 02 featured ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">05 top ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Basic suppor</span>t</li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Post  directly on YouTube</span></li>
                        <li>
                            <Link to="checkout" className="subscribe_now banner__text_btn">
                                subscribe now
                                <span className="icon__arrow_right">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="font-square-white">
                    <div className="square-white">
                        <p>BUSINESS</p>
                        <p><b> 14999 XAF </b>/Month</p>
                    </div>
                    <ul>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">100 regular ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">01 featured ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">38 top ads</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Basic support</span></li>
                        <li><span className="pricing_icon"><i className="fa-solid fa-check"></i></span> <span className="pricing_text">Post  directly on YouTube</span></li>
                        <li>
                            <Link to="checkout" className="subscribe_now banner__text_btn">
                            <span className="">subscribe now</span>
                                <span className="icon__arrow_right">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pricing
