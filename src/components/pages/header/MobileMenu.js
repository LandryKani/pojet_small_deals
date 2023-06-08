import React from 'react'
import '../../../assets/css/header.css';
import { Link } from 'react-router-dom';


function MobileMenu({ handleDisplayMobile, showMobileMenu }) {
    const mobileClass = showMobileMenu ? 'mobile_menu_open' : '';
    const openClass = showMobileMenu ? 'open' : '';

    return (
        <div className={`mobile_menu ${mobileClass}`}>
            <div className={`menu__mobile_drawer ${openClass}`} >
                <button type="button" className="btn__menu btn btn-close" onClick={handleDisplayMobile}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="mobile__search">
                    <form action="#" method="POST">
                        <input type="text" name="search" className="search__input search__box" placeholder="Entrez votre mot clé ici" />
                        <select name="category" className="select__category search__box mobile__view">
                            <option value="">Sélectionner une catégorie</option>
                            <option value="Chaussures">Chaussures</option>
                            <option value="Voiture">Voiture</option>
                            <option value="Vêtement">Vêtement</option>
                        </select>
                        <button type="submit" value="" className="btn__submit_search bg_red"><i className="fa-solid fa-search"></i></button>
                    </form>
                </div>
                <ul className="ul_menu_mobile">
                    <li className="menu__icons__account"><Link to="register" title="register">S'inscrire</Link></li>
                    <li className="menu__icons__account"><Link to="login" title="login">Se connecter</Link></li>
                    <li className="item__mobile"><Link to='favorites' className="link_active" title="whislist">Whislist</Link></li>
                    <li className="item__mobile"><Link to='cart' className="link_active" title="cart">Cart</Link></li>
                    <li className="item__mobile"><Link to='annonces' className="link_active" title="annonces">Annonces</Link></li>
                    <li className="item__mobile"><Link to='merchants' className="link_active" title="marchants">Marchants</Link></li>
                    <li className="menu_dropdown__item"><Link to="pricing" className="header_link_about" title="pricing">Pricing</Link></li>
                    <li className="menu_dropdown__item"><Link to="contact" className="header_link_about" title="nous_contacter">Nous contacter</Link></li>
                    <li className="menu_dropdown__item"><Link to="blog" className="header_link_about" title="blog">Blog</Link></li>
                    <li className="menu_dropdown__item"><Link to="faq" className="header_link_about" title="faq">FAQ</Link></li>
                    <li className="item__mobile language">
                        <select name='lang'>
                            <option value="fr">Français</option>
                            <option value="en">Anglais</option>
                        </select>
                    </li>
                    <li><Link to="#" title="vender" className="btn__red btn__sale btn__sale_mobile">Vendre</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu
