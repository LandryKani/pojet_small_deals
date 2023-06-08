import React from 'react';
import '../../../assets/css/merchant_about.css';


function Merchant_about() {
    return (
        <>
            <main className="container-merchant">
                    <div className="display-flex-center">
                        <div className="block-60">
                            <div>
                                <div className="title-div">
                                    <h2>Description</h2>

                                </div>
                                <div className="text-div">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="title-div">
                                    <h2>Contacts info</h2>

                                </div>
                                <div className="text-div">
                                    <ul>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>39 339 641 1XXX</h3>

                                        </li>


                                        <li className="display-flex" >

                                            <i className="fas fa-chevron-right"></i>
                                            <ul className="list-style-disc list-localisation">
                                                <li> Douala, Cameroun</li>
                                                <li>Yaounde, Cameroun</li>
                                            </ul>

                                        </li>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>pharmadsho.com</h3>

                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div>
                                <div className="title-div">
                                    <h2>Jours et heures d'ouvertures</h2>
                                </div>
                                <div className="text-div display-grid grid-table">
                                    <div className="border-right-grey">
                                        <div><h3>Lundi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div className="border-right-grey">
                                        <div><h3>Mardi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div className="border-right-grey">
                                        <div><h3>Mercredi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div className="border-right-grey">
                                        <div><h3>Jeudi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div className="border-right-grey">
                                        <div><h3>Vendredi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div className="border-right-grey">
                                        <div><h3>Samedi</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>
                                    <div>
                                        <div><h3>Dimanche</h3></div>
                                        <div><p>08H00-14H30</p></div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="title-div">
                                    <h2>Accepted Currencies</h2>
                                </div>
                                <div className="text-div">
                                    <ul>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>XAF</h3>

                                        </li>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>XOF
                                            </h3>
                                        </li>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>Dollar Limocoin ($ LMCSWAP)</h3>

                                        </li>
                                        <li>
                                            <h3><i className="fas fa-chevron-right"></i>EUR</h3>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
            </main>

        </>
    )
}

export default Merchant_about