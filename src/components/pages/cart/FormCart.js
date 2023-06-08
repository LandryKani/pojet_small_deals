import React from 'react';
import FormCartDetails from './FormCartDetails';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Button from "../../buttons/Button.styled";
import PopupSMSshop from '../advertDetails/PopupSMSshop';
import PopupConfirmDeleteCart from './PopupConfirmDeleteCart';


function FormCart({ carts, merchantName, merchantID, deleteOrder }) {

    const [totalPriceCart, setTotalPriceCart] = useState(0);
    const [cart, setCart] = useState(carts);
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        calculateTotal();
    }, [cart]);

    function calculateTotal() {
        let initialTotal = 0;
        cart.map(advert =>
            initialTotal += advert.priceAdvert * advert.qtyAdvert
        );
        setTotalPriceCart(initialTotal)
    }

    function updateQtyAdvert(advertID, qty) {
        var newCart = cart.map((advert, index) => {
            if (advert.advertID == advertID) {
                advert.qtyAdvert = qty;
            }
            return advert;
        })
        setCart(newCart)
    }

    function deleteAdvertToCart(advertID) {
        var newCart = cart.filter(advert => advert.advertID !== advertID)
        setCart(newCart)
    }
    // if (cart.length === 0) {
    //     setOpenModal(true);
    // }

    const titlePopup = "Cofirmation de suppression"

    return (
        <div className='form_and_order'>
            <form action="#" method="post">
                <div className="merchant__name">
                    <Link to="merchant">{merchantName}</Link>
                </div>
                {
                    cart.map((advert, index) =>
                        <FormCartDetails
                            key={index}
                            advertID={advert.advertID}
                            image={advert.image}
                            nameAdvert={advert.nameAdvert}
                            priceAdvert={advert.priceAdvert}
                            qtyAdvert={advert.qtyAdvert}
                            updateQtyAdvert={updateQtyAdvert}
                            deleteAdvertToCart={deleteAdvertToCart}
                        />
                    )
                }
                <div className="total_update display-flex">
                    <div className="h3 display-flex-center">TOTAL</div>
                    <div className="total__block_update display-flex-center bold">
                        <div className="total">{totalPriceCart} XAF</div>
                        <div className="button__update">
                            <Link to="#">
                                <Button
                                    className="Update"
                                    title='Update'
                                    variant="link"
                                    href="/fr/"
                                    maxWidth="124px"
                                    icon={<i className="fa-solid fa-rotate"></i>}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
            <div className="place__order block__update">

                <Button
                    className="Delete_the_order"
                    title='Delete'
                    variant="link"
                    href="/fr/#"
                    margin="0"
                    maxWidth="275px"
                    icon={<i className="fa-solid fa-trash-can"></i>}
                    onClick={() => setOpenModal(true)}
                />
                <Button
                    className="Place_the_order"
                    title='Place the order'
                    variant="link"
                    href="/fr//checkout"
                    margin="0"
                    maxWidth="275px"
                    icon={<i className="fa-solid fa-rotate"></i>}
                />

            </div>
            {openModal && <PopupSMSshop
                closePopup={setOpenModal}
                title={titlePopup}
                PopupContent={<PopupConfirmDeleteCart
                    deleteOrder={deleteOrder}
                    merchantID={merchantID}
                    closePopup={setOpenModal}
                />}
            />}
        </div>
    )
}




export default FormCart