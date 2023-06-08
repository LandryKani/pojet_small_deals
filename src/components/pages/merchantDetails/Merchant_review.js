import React from 'react';
import '../../../assets/css/merchant_review.css';
import { Link } from "react-router-dom";


function Merchant_review() {
    return (
        <>
            <main className="container-merchant">

                <div className="display-flex-center">
                    <div className="block-60">
                        <div className="list-review-rating">
                            <div>
                                <div className="review-rating-head display-flex">

                                    <div className="profil-image">
                                        <Link to="">
                                            {/* <!-- <img src="./assets/img/cerclebleu.svg" alt="tof"> --> */}
                                        </Link>
                                    </div>

                                    <div className="person-name">
                                        <Link to="">
                                            <div className="name-c">
                                                <h2>F. Francis</h2>
                                            </div>
                                        </Link>
                                        <div className="stars-c">
                                            <ul className="display-flex">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-regular fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="review-rating-container">
                                    <p className="review-rating-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .
                                    </p>
                                    <h6 className="time-review-rating display-flex-end">2022-03-30</h6>
                                </div>
                            </div>
                            <div>
                                <div className="review-rating-head display-flex">

                                    <div className="profil-image">
                                        <Link to="">
                                            {/* <!-- <img src="./assets/img/cerclebleu.svg" alt="tof"> --> */}
                                        </Link>
                                    </div>
                                    <div className="person-name">
                                        <div className="name-c">
                                            <Link to=""><h2>Oreol Noumodong</h2></Link>
                                        </div>
                                        <div className="stars-c">
                                            <ul className="display-flex">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="review-rating-container">
                                    <p className="review-rating-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .
                                    </p>
                                    <h6 className="time-review-rating display-flex-end">2022-03-30</h6>
                                </div>
                            </div>
                            <div className="see-more display-flex-end"><Link to="">See more</Link></div>
                        </div>
                        <div className="add-review-rating">

                            <div className="rating">
                                <h4>Your review rating</h4>
                                <ul className="display-flex">
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                </ul>

                            </div>
                            <div>
                                <form action="#">
                                    <div><label for="review">Your review</label></div>
                                    <div><textarea name="" id="review"></textarea></div>
                                    <div><input type="submit" value="Submit review" /></div>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}

export default Merchant_review