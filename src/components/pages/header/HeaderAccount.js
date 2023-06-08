import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../../assets/img/Cart.svg';


function HeaderAccount({handleDisplayMobile}) {
    return (
        <>
            <div className="block__icons ">
                <div className="block__icons_lang ">
                    <Link to="#" className="link_language has_dropdown" title="fr">
                        FR <i className="fa-solid fa-angle-down"></i>
                    </Link>
                    
                    <ul className="menu_dropdown">
                        <li className="menu__icons__item menu_dropdown__item">
                            <Link to="#" className="header_link" title="fr">Français</Link>
                        </li>
                        <li className="menu__icons__item menu_dropdown__item">
                            <Link to="#" className="header_link" title="en">Anglais</Link>
                        </li>              
                    </ul>
                </div>
                <div className="block__icons_like">
                    <Link to="favorites">
                        <i className="fa-regular fa-heart"></i>
                    </Link>
                </div>
                <div className="block__icon_cart"> 
                    <Link to="cart">
                        <img src={cart} alt="Cart" />
                        <span className="like_count">2</span>
                    </Link>
                </div>
                <div className="block__icons_acount">
                    <span className="has_dropdown"><i className="fa-regular fa-user"></i></span>
                    <ul className="menu_dropdown">
                        <li className="menu__icons__account menu_dropdown__item"><Link to="register" className="header_link" title="s'inscrire">S'inscrire</Link></li>
                        <li className="menu__icons__account menu_dropdown__item"><Link to="login" className="header_link" title="Se connecter">Se Connecter</Link></li>
                    </ul>
                </div>
            </div>
            <button type="button" className="btn__menu btn btn-hamburger" onClick={handleDisplayMobile}>
                <i className="fa-solid fa-bars"></i>
            </button>
       </>
    )
}

export default HeaderAccount