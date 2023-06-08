import React from 'react'
import '../../assets/css/header.css';
import {Link} from 'react-router-dom';


function MobileMenu({handleDisplayMobile, displayMobileMenu}) {

    return (
        <div className={` hide__bloc_hover ${displayMobileMenu && "shadow"}`}>
            <div className={`menu__mobile_drawer changeToggle ${displayMobileMenu && "open"}`} >
                <button type="button" className="btn__menu btn btn-close" onClick={handleDisplayMobile}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="mobile__search">
                    <form action="#" method="POST">
                        <input type="text" name="search" className="search__input search__box" placeholder="Entrez votre mot clé ici" />
                        <select name="category" className="select__category search__box mobile__view">
                            <option value="">Sélectionner une catégorie</option>
                            <option value="a">Chaussures</option>
                            <option value="a">Voiture</option>
                            <option value="a">Vêtement</option>
                        </select>
                        <button type="submit" value="" className="btn__submit_search bg_red"><i className="fa-solid fa-search"></i></button>
                    </form>
                </div>
                <ul className="ul_menu_mobile">
                    <li className="item__mobile li_menu_account"><Link  to='#' className="link_active" title="account">Account</Link>
                        <ul className="hide__bloc_hover">
                            <li className="menu__icons__account"><Link to="#" title="account">Mon compte</Link></li>
                            <li className="menu__icons__account"><Link to="#" title="logout">Se déconnecter</Link></li>
                        </ul>
                    </li>
                    <li className="item__mobile"><Link to='#' className="link_active" title="whislist">Whislist</Link></li>
                    <li className="item__mobile"><Link to='#' className="link_active" title="cart">Cart</Link></li>
                    <li className="item__mobile"><Link to='#' className="link_active" title="annonces">Annonces</Link></li>    
                    <li className="item__mobile"><Link to='#' className="link_active" title="marchants">Marchants</Link></li>    
                    <li className="item__mobile a_propos_de_nous"><Link to='#' className="link_active" title="marchants">A propos <i className="fa-solid fa-angle-down"></i></Link>
                        <ul className="hide__bloc_hover">
                            <li><Link to="#" title="pricing">Pricing</Link></li>
                            <li><Link to="#" title="nous_contacter">Nous contacter</Link></li>
                            <li><Link to="./blog.php" title="blog">Blog</Link></li>
                            <li><Link to="#" title="faq">FAQ</Link></li>
                        </ul>
                    </li>    
                    <li className="item__mobile language"><Link to="#" className="link_active" title="fr">Français</Link> 
                        <i className="fa-solid fa-angle-down"></i>
                        <ul className="hide__bloc_hover">
                            <li className="menu__icons__item"><Link to="#" title="fr">Français</Link></li>
                            <li className="menu__icons__item"><Link to="#" title="en">Anglais</Link></li>
                        </ul>   
                    </li>
                    <li><Link to="#" title="vender" className="btn__red btn__sale btn__sale_mobile">Vendre</Link></li>    
                </ul>
            </div>
        </div>
  )
}

export default MobileMenu
