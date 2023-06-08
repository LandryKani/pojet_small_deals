import React from 'react';
import { Link } from "react-router-dom";


function PostHome({link,image,text,time}) {
    return (
        <>

            <div class="hov">
                <div class="post">
                    <div class="post-image">
                        <Link to={link}><img src={image} alt="img" /></Link>
                    </div>
                    <div class="post-text">
                        <p>{text}</p>
                    </div>
                    <div class="post-time">
                        <h6>{time}</h6>
                    </div>


                </div>
            </div>
        </>
    )
}

export default PostHome