import React from 'react'
import Button from '../../buttons/Button.styled'
import '../../../assets/css/PopupConfirmDeleteCart.css'

function PopupConfirmDeleteCart({deleteOrder, merchantID, closePopup}) {

    
    const hendle_deleteOrder = (() => {
        deleteOrder(merchantID)
        closePopup(false)
    });

    return (
        <div className='block_confirm_delete_order_contain'>
            <p>Êtes vous sûre de vouloir supprimer cette commande ?</p> <br />
            <div className='block_confirm_delete_order display-flex'>

                <Button
                    className="Delete_the_order"
                    title='Non'
                    variant="link"
                    bgcolor="green"
                    href='#'
                    margin="0"
                    maxWidth="200px"
                    onClick={() => closePopup(false)}
                />
                <Button
                    className="Delete_the_order"
                    title='Oui'
                    variant="link"
                    href='#'
                    margin="0"
                    maxWidth="200px"
                    onClick={() => hendle_deleteOrder()}
                />
            </div>
        </div>
    )
}

export default PopupConfirmDeleteCart