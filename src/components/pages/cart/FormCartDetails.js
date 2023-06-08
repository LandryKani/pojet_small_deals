import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/cart.css";

function FormCartDetails({
    advertID,
    image,
    nameAdvert,
    priceAdvert,
    qtyAdvert,
    updateQtyAdvert,
    deleteAdvertToCart
}) {
    const [qty, setQty] = useState(qtyAdvert);
    const [partialTotal, setPartialTotal] = useState(priceAdvert * qty);
    const [like, setLike] = useState(false);

    const hendle_decrease_qty = (() => {
        if (qty > 1) {
            let newQty = qty - 1;
            setQty(newQty)
            updateQtyAdvert(advertID, newQty)
            setPartialTotal(priceAdvert * newQty)
        }
    })
    const hendle_increase_qty = (() => {
        let newQty = qty + 1;
        setQty(newQty)
        updateQtyAdvert(advertID, newQty)
        setPartialTotal(priceAdvert * newQty)
    })
    const hendle_deleteAdvert = (() => {
        deleteAdvertToCart(advertID)
    })
    const handleLike = () => {
        setLike(like ? false : true);
    }
    const openClass = like ? 'color-red' : '';

    
    return (
        <div className="products__cart display-flex-center">
            <div className="image__name_product display-flex-center">
                <img src={image} alt="image" className='imageAdvert' />
                <Link to="advert"> {nameAdvert}</Link>
            </div>
            <div className="price_unique display-flex">
                {partialTotal} XAF
            </div>
            <div className="qty_number_favorite__delete display-flex-center">
                <div className="qty_number display-flex-center">
                    <button
                        className="decrease_qty display-flex-center"
                        onClick={() => hendle_decrease_qty()}
                        type="button">-
                    </button>
                    <input type="number" min="1" name="quantity" value={qty} className="number" readonly />
                    <button
                        className="increase_qty display-flex-center"
                        onClick={() => hendle_increase_qty()}
                        type="button">+
                    </button>
                </div>
                <div className="favorite__delete">
                    <i className={`fa-solid fa-heart ${openClass}`} onClick={() => handleLike()}></i>
                    <i className="fa-solid fa-trash-can color-red" onClick={() => hendle_deleteAdvert()}></i>
                </div>
            </div>
        </div>
    )
}

export default FormCartDetails