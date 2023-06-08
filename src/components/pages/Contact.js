import React from 'react';
import '../../assets/css/contact.css';
import { Link } from "react-router-dom";


function Contact() {
    return (
        <>
            <div >
                <div className="head">
                    <div className="header-favorite">
                        <h2>Contact us</h2>

                    </div>
                </div>


                {/* <!-- fin Zone de recherche--> */}

                <main>

                    <div className="gap padding contact-container">
                        <div className="contact-informations">
                            <div >
                                <h4>ADDRESSE</h4>
                                <p>Entree Marie Efoulan Yaounde Cameroon</p>
                            </div>
                            <div>
                                <h4>TELEPHONE </h4>
                                <p>(+237) 696 155 706</p>
                            </div>
                            <div>
                                <h4>ADDRESSE EMAIL </h4>
                                <p>info@small-deals.com</p>
                            </div>
                            <div className="contact-icons">
                                <Link to="">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-instagram"></i>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-twitter"></i>
                                </Link>

                            </div>
                        </div>
                        <div className="contact-form">
                            <form action="">
                                <div className="bloc-field">
                                    <label for="">Complet name</label><br />
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="bloc-field">
                                    <label for="">Email</label><br />
                                    <input type="email" className="input-field" />
                                </div>
                                <div className="bloc-field">
                                    <label for="">Phone number</label><br />
                                    <input type="text" className="input-field" />
                                </div>
                                <div>
                                    <label for="" className="bloc-field">Subject</label><br />
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="bloc-field">
                                    <label for="">Message</label><br />
                                    <textarea name="" id="" className="textarea-field"></textarea>
                                </div>
                                <div>
                                    <input type="submit" value="Envoyer" className="submit-btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Contact