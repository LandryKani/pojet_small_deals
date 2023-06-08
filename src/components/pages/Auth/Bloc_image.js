import React from 'react';
import phone1 from '../../../assets/img/phone1.svg';
import phone2 from '../../../assets/img/phone2.svg';
import phone3 from '../../../assets/img/phone3.svg';

function Bloc_image() {
    return (
        <>
            <div className="register-div-image">
                <div className="register-div-image-title"><h1>You can also download app for more experience</h1></div>
                <div className="circle-phone">
                    <div className="phone1"><img src={phone1} alt="image" /></div>
                    <div className="phone2"><img src={phone2} alt="image" /></div>
                    <div className="phone3"><img src={phone3} alt="image" /></div>
                </div>

            </div>
        </>
    )
}

export default Bloc_image