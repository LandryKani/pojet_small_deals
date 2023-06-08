import React from 'react';
import '../../../assets/css/blog_details.css';
import Article from './Article';
import Aside from './Aside';
import { recentsPosts } from '../../../utils/recentsPosts';
import Post from './Post';
import { Link } from "react-router-dom";


function Blog_Details() {
    return (
        <>
            <div >
                <div className="header-blog-view">

                </div>
                <div className="header-blog-view-nav display-flex">
                    <div className="b-title">
                        <h2>Title here</h2>
                    </div>
                    <div className="b-icons">
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

                <div className="d-blog container">
                    <Article />
                    <Aside />
                </div>
                <div className="recent-posts">
                    <div className="display-flex-center">
                        <div className="container">
                            <h3>Mes posts réçents</h3>

                            {/* <!-- Debut grille des post --> */}
                            <div className="display-grid posts-grid">
                                {recentsPosts.map(rpost =>
                                    <Post image={rpost.image}
                                        link={rpost.link}
                                        text={rpost.text}
                                        time={rpost.time}
                                    />
                                )
                                }
                            </div>

                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_Details