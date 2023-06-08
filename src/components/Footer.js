import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/footer.css'
import logo from '../assets/img/logo.png'
import Subtract from '../assets/img/Subtract.png'
import tel from '../assets/img/tel.png'
import Vector from '../assets/img/Vector.png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
            <div className="footer_menu">
                <img id="logo__footer" src={logo} alt="icone-small-deal" height="15%"/>
                <br/>
                <p>
                    Small Deals, le plus grand marché d'annonces de
                    produits
                    au Cameroun, offre des produits parfaits pour votre
                    maison et
                    votre entreprise.
                </p>
                <ul>
                    <li>
                        <img src={Subtract} alt="ion_localization"/>
                        Entree Marie Efoulan
                        Yaounde Cameroon
                    </li>
                    <br/>
                    <li><img src={tel} alt="icon_tel"/> +237 9000000</li>
                </ul>
            </div>
            <div className="footer_menu">
                <ul>
                    <h3 className="menu_title">How to sell fast</h3>
                    <li><Link to="template">Selling TIps</Link></li>
                    <li><Link to="template">Buy and Sell Quickly</Link> </li>
                    <li><Link to="template">Membership</Link></li>
                    <li><Link to="template">Banner Advertising</Link></li>
                    <li><Link to="template">Promote Your Ad</Link></li>
                </ul>
            </div>
            <div className="footer_menu">

                <ul>
                    <h3 className="menu_title">More information</h3>
                    <li><Link to="contact">Company & Contact Info</Link></li>
                    <li><Link to="blog">Buy and Sell Quickly</Link></li>
                    <li><Link to="template">Blog & Articles</Link></li>
                    <li><Link to="template">Terms of Service</Link></li>
                    <li><Link to="template">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer_menu">
                <ul>
                    <h3 className="menu_title">Help & Support</h3>
                    <li><Link to="faq">FAQ</Link></li>
                    <li><Link to="template">How to Stay Safe</Link></li>
                    <li><Link to="template">Terms & conditions</Link></li>
                </ul>
            </div>
            <div className="footer_menu footer_menu--newsletter">
                <h3 className="menu_title">Stay Updated</h3>
                <div className="form_newsletter">
                    <input type="text" className="footer-input-text" placeholder="Enter your email"/>
                    <button type="submit" className="button_submit--newsletter btn_red">
                        <img src={Vector} width="20px" height="15px" alt="icon_submit"/>
                    </button>
                </div>
            </div>
        </div>
      </div>
      <p className="footer-bottom display-flex-center"> © Copyright Small Deals
            2022. Conçu et développé par ViazizaTech
      </p>
    </footer>
  )
}

export default Footer