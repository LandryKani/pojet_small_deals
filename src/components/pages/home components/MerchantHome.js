import React from 'react';
import '../../../assets/css/Merchants.css';
import Star2 from '../../../assets/img/Star 2.svg';
import { Link } from "react-router-dom";



function MerchantHome({
    image,
    name,
    description,
    link,
    ads,
    stars
}) {
    let likes = [];
    for (let i = 0; i < stars; i++) {
        likes.push(<li><img src={Star2} alt="star1" className="fa-star"
            ondblclick="src='./assets/img/Star 2.svg'"
            onclick="src='Star5'" /></li>)
    }
    console.log('App started');


    return (
        <>
            <div className='container-merchant'>
                <div key={name} className="merchant">
                    <div className="merchants-image">
                        <Link to={link}>
                            <img src={image} alt="merchent-image" className="merchants-image" />
                        </Link>
                    </div>
                    <div className='merchants-title'>
                        <Link to={link}>
                            <h3 className="merchant-name">{name}</h3>
                            <h4>{`( ${ads} ) ads`} </h4>
                        </Link>
                    </div>
                    <div className="description">
                        <p> {description}</p>
                    </div>
                    <div className="stars-button display-flex">
                        <div className="stars-div">
                            <ul className="stars">
                                {likes}
                            </ul>
                            <span className="count-likes"></span>
                        </div>
                        <div className="btn-const">
                            <button className="btn-consultate"><Link to={link}>Consultez</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MerchantHome