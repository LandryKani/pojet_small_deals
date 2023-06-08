import React from 'react';
import "../../../assets/css/cart.css";
import { cartDatas } from '../../../utils/cart/cartDatas';
import FormCart from './FormCart';
import { useState, useEffect } from 'react'


function Cart() {

    const [cartData, setCartData] = useState(cartDatas);
    function deleteOrder( merchantID){
        var newCartData = cartData.filter(data => data.merchantID !== merchantID)
        setCartData(newCartData)
    }

    return (
        <div className=''>
            <div className='head'>
            <div className="header-favorite head__padding">
                <h1>Shopping Cart</h1>
            </div>
            </div>
            <div className="block__shopping_cart">
                <div className='container'>
                    {
                        cartData.map((cartBlock, index) =>
                            <FormCart
                                key={index}
                                carts={cartBlock.carts}
                                merchantName={cartBlock.merchantName}
                                merchantID={cartBlock.merchantID}
                                deleteOrder={deleteOrder}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart