import React from 'react'
import Button from '../../buttons/Button.styled'
import MerchantContact from './MerchantContact';
import PopupSMSshop from './PopupSMSshop';
import PopupSMSshopContent from './PopupSMSshopContent';


function AdvertFormDetail({
    product,
    price2,
    price3,
    qty,
    setQty,
    hendle_decrease_qty,
    merchantName,
    merchant,
    contact1,
    contact2,
    website,
    setOpenModal,
    openModal
}) {

    const titlePopup = "Message"
    const descriptionPopup = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.."

    return (
        <div className="block__product_details">
            <div className="product__title">
                <h1>{product.name}</h1>
                <p>
                    {product.description}
                </p>
            </div>
            <div className="product__qty_price display__flex">
                <div className="product__qty bold">
                    <label>Qty</label>
                    <div className="qty_number">
                        <button className="decrease_qty"
                            onClick={() => hendle_decrease_qty()}
                            type="button">-
                        </button>
                        <input type="number" min="1" name="quantity" value={qty} className="number" readonly />
                        <button className="increase_qty"
                            onClick={() => setQty(qty + 1)}
                            type="button">+
                        </button>
                    </div>
                </div>
                <div className="product__price">
                    <ul>
                        <li className="">
                            <input type="number"
                                name='price'
                                value={qty * product.regular_price_amount}
                                className="price__xaf"
                            />XAF
                        </li>
                        {product.price_currencies.map((item_price, index) =>
                            <li key={index}>
                                {item_price.price}
                            </li>
                        )}
                        <li className="price__btc">{qty * price2} Btc</li>
                        <li className="price__limo">
                            {qty * price3} LmCSWP <span className="percentage color_green_price">({product.discount_percentage})</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="buttons__group">

                <ul className='display-flex-center'>
                    <li className="button__item ">
                        <Button
                            className="add_to_cart"
                            title='Add to card'
                            variant="link"
                            href="#"
                            maxWidth="161px"
                            bgcolor="#E80707"
                            icon={<i class="fa-solid fa-cart-plus"></i>}
                            padding='12px'
                        />
                    </li>
                    <li className="button__item">
                        <Button
                            className="chat"
                            title='Chat'
                            variant="link"
                            href="#"
                            maxWidth="161px"
                            bgcolor="#1e558b"
                            icon={<i class="fa-solid fa-comment-dots"></i>}
                            padding='12px'
                        />
                    </li>
                    <li className="button__item">
                        <Button
                            className="email"
                            title='Email seller'
                            variant="link"
                            href="#"
                            bgcolor="#FF9C00"
                            maxWidth="161px"
                            icon={<i class="fa-solid fa-envelope"></i>}
                            padding='12px'
                            onClick={() => setOpenModal(true)}
                        />
                    </li>
                </ul>


            </div>
            <MerchantContact
                merchant={merchant}
                contact1={contact1}
                contact2={contact2}
                website={website}
            />
            {openModal && <PopupSMSshop
                closePopup={setOpenModal}
                merchantName={merchantName}
                title={titlePopup}
                description={descriptionPopup}
                PopupContent={<PopupSMSshopContent />}
            />}
        </div>
    )
}

export default AdvertFormDetail