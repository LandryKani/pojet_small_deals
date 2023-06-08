import React from 'react';
import { Link } from "react-router-dom";


function Sous_menu() {
    return (
        <>
            <div className="menu_flex1" id="menu_flex1">
                <ul className="menu_flex">
                    {/* <li><Link to="merchant" className="link active">Annonces</Link></li> */}
                    <li><Link to="merchant" className="link">Annonces</Link></li>
                    <li><Link to="merchant_about" className="about link">About</Link></li>
                    <li><Link to="merchant_review" className="link">Avis</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sous_menu