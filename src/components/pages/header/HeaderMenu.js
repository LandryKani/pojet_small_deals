import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMenu() {
    return (
        <div className="block__menu desktop__view">
            <ul className="menu__header">
                <li className="menu__header_item"><Link to="annonces" className="header_link" title="annonces">Annonces</Link></li>
                <li className="menu__header_item"><Link to="merchants" className="header_link" title="marchants">Marchants</Link></li>
                <li className="menu__header_item">
                    <Link to="#" title="A propos" className="header_link has_dropdown">
                        A propos <i className="fa-solid fa-angle-down"></i>
                    </Link>
                    <ul className="menu_dropdown">
                        <li className="menu_dropdown__item"><Link to="pricing" className="header_link_about" title="pricing">Pricing</Link></li>
                        <li className="menu_dropdown__item"><Link to="contact" className="header_link_about" title="nous_contacter">Nous contacter</Link></li>
                        <li className="menu_dropdown__item"><Link to="blog" className="header_link_about" title="blog">Blog</Link></li>
                        <li className="menu_dropdown__item"><Link to="faq" className="header_link_about" title="faq">FAQ</Link></li>
                    </ul>
                </li>
                <li className="menu__header_item"><Link to="#" title="vender" className="btn__red btn__sale">Vendre</Link></li>
            </ul>
        </div>
    )
}

export default HeaderMenu