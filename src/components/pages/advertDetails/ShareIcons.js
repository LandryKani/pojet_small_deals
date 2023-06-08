import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api_route } from '../../../utils/api_route.js';
import { fetch_get, fetch_post } from '../../../utils/help_functions.mjs';

function Social(social_share) {
    return (
        <a href={social_share.url} key={social_share.class} title={social_share.class} target="blank">
            <div className={`circle__icons share_icons_${social_share.class}`}>
                <i className={`fa-brands fa-${social_share.class}`}></i>
            </div>
        </a>
    );
}

function ShareIcons() {
    const [linkShare, setLinkShare] = useState([]);

    useEffect(() => {
        var formdata = new FormData();
        formdata.append("url_product", api_route.shareProducts.url + "/2-brown-bear-printed-sweater");
        fetch_post(api_route.shareProducts.url + "/2-brown-bear-printed-sweater?id_lang=1", formdata, getProduct);
    }, [])

    const getProduct = (datas) => {
        if (datas.status == 200) {
            if (datas.success == true) {
                setLinkShare(datas.datas.social_share_links);
            }
        }
    }

    return (
        <div className="share__icons">
            <p className="share__title">Partagez cette annonce:</p>
            <div className="share_icons_circle_icons">
                {linkShare.map(Social)}
            </div>
        </div>
    )
}

export default ShareIcons