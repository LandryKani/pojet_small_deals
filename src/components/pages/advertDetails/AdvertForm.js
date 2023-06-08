import React from 'react'
import { useState, useEffect } from 'react';
import '../../../assets/css/product.css';
import { fetch_get } from '../../../utils/help_functions.mjs';
import { api_route } from '../../../utils/api_route';
import ShareIcons from './ShareIcons';
import GetImages from './GetImages';
import AdvertFormDetail from './AdvertFormDetail';
import NewProduct from './NewProduct';
import { useParams } from  'react-router-dom';


function AdvertForm(
    {
        merchantName,
        price2,
        price3,
        merchant,
        contact1,
        contact2,
        website
    }) {

    const params = useParams();
    console.log('params :' , params);
    const [product, setProduct] = useState(null);
    const [imgSelected, setImgSelected] = useState('');
    const [qty, setQty] = useState(1);
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        fetch_get(api_route.product_detail.url + params.id,
            getProduct
        );
    }, []);

    const getProduct = (datas) => {
        if (datas.status == 200) {
            if (datas.success == true) {
                setProduct(datas.datas.product);
                setImgSelected(datas.datas.product.default_image.large.url)
            }
        }
    }

    const hendle_decrease_qty = (() => {
        if (qty < 2) {

        } else {
            setQty(qty - 1)
        }
    }
    )


    return (
        <form action="#" method="post" >
            <div className='block_image__block_produit_details display-flex-center'>
                {product != null ?
                    <>
                        <div className="block__image">
                            <div className="featured_image_active">
                                {product.new == 0 ?
                                    <div className='container_like'><div className='circle__icons'> <i className='fa-solid fa-heart color-red'></i> </div></div>
                                    :
                                    <></>
                                }
                                <img src={imgSelected} alt="image" className='featured_image' />
                                {product.new == 0 ?
                                    <NewProduct />
                                    :
                                    <></>
                                }
                            </div>
                            <ul className="block__image_thumbs">
                                <GetImages
                                    product={product}
                                    imgSelected={imgSelected}
                                    setImgSelected={setImgSelected}
                                />
                            </ul>
                            <ul className="product__stats">
                                <li>
                                    <i className="fa-solid fa-clock"></i> 2 months ago
                                </li>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i> Baham Ouest
                                </li>
                                <li>
                                    <i className="fa-solid fa-eye"></i> 1003 vues
                                </li>
                            </ul>
                            <ShareIcons />

                        </div>
                        <AdvertFormDetail
                            product={product}
                            merchantName={merchantName}
                            merchant={merchant}
                            contact1={contact1}
                            contact2={contact2}
                            website={website}
                            price2={price2}
                            price3={price3}
                            qty={qty}
                            setQty={setQty}
                            hendle_decrease_qty={hendle_decrease_qty}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </>
                    :
                    <>
                        <h1 className="loadingComponent">
                            <i className="fa-solid fa-spinner"></i>
                        </h1>
                    </>
                }
            </div>


        </form>

    )
}

export default AdvertForm