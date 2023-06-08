import React from 'react';
import '../../assets/css/Merchants.css';
import search from '../../assets/img/search.svg';
import Vector from '../../assets/img/Vector.svg';
import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import media3 from '../../assets/img/media3.jpg';
import image4 from '../../assets/img/image4.jpg';
import Star5 from '../../assets/img/Star5.svg';
import { Link } from "react-router-dom";



function Merchants() {
    return (
    <>
            <div >
                {/* <!-- debut Zone de recherche--> */}
                <div className="head head__padding">
                    <div className="container__search display-flex-center">

                        <div className="input-icon">
                            <input className="input-search" type="text" placeholder="store name" />

                                <img src={search} alt="search" className="fa-search" />

                                </div>
                                <div onclick="visible()"><img src={Vector} alt="f-search" className="bars" /></div>
                                <div className="body-side-bar" id="body-side-bar">
                                    <div className="side-bar" id="side-bar">
                                        <div className="close-btn" onclick="display()">
                                            <i className="fas fa-times"></i>
                                        </div>
                                        <div className="menu">
                                            <div className="item">
                                                <h4>informations for more searches</h4>
                                            </div>
                                            <div className="item">
                                                <select name="" id="">
                                                    <option value="">Cathegory</option>
                                                </select>
                                            </div>
                                            <div className="item">
                                                <select name="" id="">
                                                    <option value="">City</option>
                                                </select>
                                            </div>
                                            <div className="item">
                                                <select name="" id="">
                                                    <option value="">Currency</option>
                                                </select>
                                            </div>

                                            <div className="item">
                                                <button className="btn-search-filter">Apply Filter</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>


                        </div>
                    </div>
                    {/* <!-- fin Zone de recherche--> */}

                    <main className="container-merchant">

                        <div className="display-flex-center container-grid">
                            <div className="container">
                                <div className="count-title">
                                    <h3 className="merchands-found">( <span className="count-merchants">300</span> ) marchants trouvés</h3>
                                </div>

                                <div className="grid-merchants display-grid">
                                    <div className="merchant hov">
                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={image1} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">UN. Média</h3>
                                                <h4>(1.7K) ads</h4>
                                            </Link>
                                        </div>
                                        <p className="description"> Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star1" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star2" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star3" className="fa-star"/></li>
                                                    <li><img src={Star5} alt="star4" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star5" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="merchant hov">
                                        <div className="merchants-image"><Link to="merchant">
                                            <img src={image2} alt="merchent-image" className="merchants-image"/>
                                        </Link></div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>

                                        </div>
                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="merchant hov">

                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={media3} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>
                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="merchant hov">

                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={image4} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>

                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star1111" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star1112" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star1113" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star1114" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star1115" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="merchant hov">
                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={image1} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>
                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star111" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star112" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star113" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star114" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star115" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="merchant hov">
                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={image2} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>
                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star11" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star12" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star13" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star14" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star15" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="merchant hov">

                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={media3} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>

                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='../assets/img/Star 2.svg'"
                                                        onclick="src='.Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='../assets/img/Star 2.svg'"
                                                        onclick="src='.Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="merchant hov">

                                        <div className="merchants-image">
                                            <Link to="merchant">
                                                <img src={image4} alt="merchent-image" className="merchants-image"/>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="merchant">
                                                <h3 className="merchant-name">Viaziza Tech</h3>
                                                <h4>(100) ads</h4>
                                            </Link>
                                        </div>

                                        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard.</p>
                                        <div className="stars-button">
                                            <div className="stars-div">
                                                <ul className="stars">
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                    <li><img src={Star5} alt="star" className="fa-star"
                                                        ondblclick="src='./assets/img/Star 2.svg'"
                                                        onclick="src='Star5'"/></li>
                                                </ul>
                                                <span className="count-likes"></span>
                                            </div>
                                            <div className="btn-const">
                                                <button className="btn-consultate"><Link to="merchant">Consultez</Link></button>
                                            </div>
                                        </div>

                                    </div>




                                </div>

                                <div className="display-flex-center paginate">
                                    <button>
                                        <i className="fas fa-chevron-left"></i>
                                    </button>
                                    <button className="active">1</button>
                                    <button>2</button>


                                    <button>...</button>

                                    <button>9</button>

                                    <button>10</button>

                                    <button>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </main>
                    {/* <!-- debut du footer --> */}
                </div>
            </>
            )
}

export default Merchants