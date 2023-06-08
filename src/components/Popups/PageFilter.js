import React from 'react';
import '../../assets/css/ButtonFilter.css';


const PageFilter = props => {
    // this.state = {
    //     popupOpened: false,
    //   }
    return (

        <>
            <div className="body-side-bar-active" id="body-side-bar" onClick={props.handleClose}></div>
                <div className="side-bar active " id="side-bar">
                    <div className="close-btn" onClick={props.handleClose} >
                        <i className="fas fa-times"></i>
                    </div>
                    {props.content}

                </div>

            

        </>
    )
}

export default PageFilter