import React from 'react';
import { Link } from "react-router-dom";


function Post({ link, image, text, time }) {
    return (
        <>
            <div className="hov">
                <div className="post">
                    <div className="post-image">
                        <Link to={link}><img src={image} alt="img" /></Link>
                    </div>
                    <div className="post-text">
                        <p>{text}</p>
                    </div>
                    <div className="post-time">
                        <h6>{time}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post