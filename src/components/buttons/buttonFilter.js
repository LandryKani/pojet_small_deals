import React, { useState } from 'react';
import Vector from '../../assets/img/Vector.svg';
import '../../assets/css/ButtonFilter.css';


const ButtonFilter = props => {
    // this.state = {
    //     popupOpened: false,
    //   }
    return (

        <>
            <div className="body-side-bar-active" id="body-side-bar">
                <div className="side-bar active " id="side-bar">
                    <div className="close-btn" onClick={props.handleClose} >
                        <i className="fas fa-times"></i>
                    </div>
                    {props.content}

                </div>

            </div>

        </>
    )
}

export default ButtonFilter