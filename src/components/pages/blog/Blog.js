import React from 'react';
import { postsData } from '../../../utils/postsData';
import ButtonPaginate from '../../buttons/ButtonPaginate';
import Post from './Post';
import '../../../assets/css/blog.css';

function Blog() {
    return (
        <>
            <div >
                <div className="head display-flex-center">
                    <div className="header-blog">
                        <h2>Blog posts</h2>

                    </div>
                </div>

                {/* <!-- fin Zone de recherche--> */}

                <div className="container-merchant">

                    <div className="display-flex-center">
                        <div className="container">

                            {/* <!-- Debut grille des post --> */}
                            <div className="display-grid posts-grid">
                                {postsData.map(post =>
                                    <Post image={post.image}
                                        link={post.link}
                                        text={post.text}
                                        time={post.time}
                                    />
                                )
                                }

                            </div>

                            <ButtonPaginate />

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Blog