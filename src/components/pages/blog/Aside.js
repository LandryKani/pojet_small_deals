import React from 'react';
import profil from '../../../assets/img/b2.jpg';
import { Link } from "react-router-dom";


function Aside() {
  return (
    <>
        <aside className="aside">
            <div>
                <h3>A propos de Nous</h3>
                <div className="about-us-blog">
                    <div className="about-us-blog-img"><img src={profil} alt="profil" width="100%" height="200px"/></div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quae iure labore itaque ipsa
                        id accusantium voluptates molestias aspernatur? Doloribus amet quasi praesentium, omnis suscipit
                        rerum natus dolore alias eveniet?
                    </p>
                </div>
            </div>

            <div className="follow-us">
                <h3>Suivez nous sur </h3>
                <div className="display-flex-center">
                    <Link to="">
                        <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                </div>
            </div>

        </aside>
    </>
  )
}

export default Aside